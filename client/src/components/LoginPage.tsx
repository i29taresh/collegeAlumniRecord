import React, { FormEvent, useState } from "react";

const Create = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const body = { username, password };
    console.log(body);

    try {
      const response = await fetch("http://localhost:5000/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);

      // window.location="/";
      const win: Window = window;
      win.location = "/alumni-list";
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Log In</h1>
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

          {/* password */}
          <input
            className="form-control mt-1"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="btn btn-success mt-1">Login</button>
        </div>
      </form>
      <div className="float-end mx-auto w-50">
        <span>
          Don't have account?{" "}
          <button
            onClick={() => {
              const win: Window = window;
              win.location = "/register";
            }}
            className="btn btn-primary"
          >
            Sign up
          </button>
        </span>
      </div>
    </>
  );
};

export default Create;
