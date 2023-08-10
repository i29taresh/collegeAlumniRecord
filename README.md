# collegeAlumniRecord
# Tech stack used 

Frontend = React with typescript

Backend = nodejs, expressjs, javaScript

ORM used = Prisma

database used = sqlite (sql database)

Authentication = bcrypt, JWT(jsonWebTokens)


Available Scripts
In the project directory
First go to server folder

`cd .\server\`

then start the server
`nodemon .\index.js`

this starts the server at http://localhost5000

Now go to client folder via main folder

`cd ..`
`cd .\client\`

`npm run dev`
Runs the app in the development mode.
Open http://localhost:5173 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

To visualise the databse we can you use prisma Studio
for this go to server folder and run this command

`npx prisma studio`
Open http://localhost:5555 to view the database in your browser.

#Environment Variables
There is a `.env.example` file provided use that to make your own .env file.

#Use the app
1. Register by providing the required details
2. Login by using your credentials
3. Use CRUD operations by adding, editing, viewing, deleting data.
