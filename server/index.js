const express  = require("express");
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient;
const token = null;
// middleware
app.use(cors());
app.use(express.json());

// ROUTES
function authenticateToken(req, res, next){
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(' ')[1];
  if(token == null){
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if(err){
      return res.sendStatus(403);
    }
    req.user = user;
    req.token = token
    next();
  })
}


app.post("/api/register", async(req,res) => {
    console.log(req.body);
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password,salt)
        const user = await prisma.user.create({
          data:{
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            full_name: req.body.full_name,
            age: parseInt(req.body.age),
            gender: req.body.gender,
          }
        })
        res.json(user);
      } catch (err) {
        console.log(err.message);
      }
})

app.post('/api/token', async(req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    }
  })
  if(user == null){
    return res.status(400).send('Cannot find user');
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)){
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
      token = accessToken;
      res.json({accessToken: accessToken})
      console.log(accessToken);
    }
    else{
      res.send("Not allowed");
    }
  } catch (error) {
    res.sendStatus(500).send()
  }
})

// create a alumni
app.post("/api/data", authenticateToken, async(req,res) => {
    try {
        const alumni = await prisma.alumni.create({
          data: {
            name: req.body.name,
            branch: req.body.branch,
            passoutYear: parseInt(req.body.passoutYear),
            currentCompany: req.body.currentCompany,
            sId: req.body.sId,
          },
        })
        console.log(accessToken);
        res.json(alumni);
      } catch (err) {
        console.log(err.message);
      }
})
// get all alumni

    app.get("/api/data", async(req,res) => {
        try {
            const allAlumnis =await prisma.alumni.findMany();
            res.json(allAlumnis);
        } catch (err) {
            console.log(err.message);
        }
    })

// get an alumni

app.get("/api/data/:id", async(req,res) => {
        try {
            const {id} = req.params;
            const alumni =await prisma.alumni.findUnique({
                where:{
                    id: parseInt(id)
                }
            });
            res.json(alumni);
        } catch (err) {
            console.log(err.message);
        }
    })

// update an alumni

app.put("/api/data/:id", async(req, res) => {
        const {id} = req.params;
        const updateAlumni = await prisma.alumni.update({
            where: {
              id: parseInt(id),
            },
            data: req.body
          })
          res.json(updateAlumni);
    })

// delete an alumni

app.delete("/api/data/:id", async(req,res) => {
        const {id} = req.params;
        const deletedAlumni = await prisma.alumni.delete({
            where: {
              id: parseInt(id),
            }
          })
          res.json(deletedAlumni);
    })

app.listen(5000, () => {
    console.log("Server has started on port 5000!");
})