import React, { FormEvent, useState } from "react";

const Create = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const body = { username, email, password, full_name, age, gender };
    console.log(body);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);

      // window.location="/";
      const win: Window = window;
      win.location = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Sign Up</h1>
      <form className="mt-5 mx-auto w-50" onSubmit={onSubmitForm}>
        <div className="form-group">


          {/* username */}
          <input
            className="form-control"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>



          {/* email */}
          <input
            className="form-control mt-1"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>



          {/* password */}
          <input
            className="form-control mt-1"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>



          {/* full_name */}
          <input
            className="form-control mt-1"
            type="text"
            value={full_name}
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          ></input>



          {/* age */}
          <input
            className="form-control mt-1"
            type="text"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          ></input>



          {/* gender */}
          <input
            className="form-control mt-1"
            type="text"
            value={gender}
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <button className="btn btn-success mt-1">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Create;
