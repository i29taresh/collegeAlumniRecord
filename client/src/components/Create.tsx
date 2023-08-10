import React, { FormEvent, useState } from "react";

const Create = () => {
  const [sId, setSId] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [passoutYear, setPassoutYear] = useState("");

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const body = { sId, name, branch, currentCompany, passoutYear };
    console.log(body);

    try {
      console.log("inside try");

      // const body = { sId, name, branch, currentCompany, passYear };
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);

      // window.location="/";
      // const win: Window = window;
      // win.location = "/alumni-list";
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Alumni List</h1>
      <form className="mt-5 mx-auto w-50" onSubmit={onSubmitForm}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={sId}
            placeholder="Student ID"
            onChange={(e) => setSId(e.target.value)}
          ></input>
          <input
            className="form-control mt-1"
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="form-control mt-1"
            type="text"
            value={branch}
            placeholder="Branch"
            onChange={(e) => setBranch(e.target.value)}
          ></input>
          <input
            className="form-control mt-1"
            type="text"
            value={passoutYear}
            placeholder="Passout Year"
            onChange={(e) => setPassoutYear(e.target.value)}
          ></input>
          <input
            className="form-control mt-1"
            type="text"
            value={currentCompany}
            placeholder="Current Company"
            onChange={(e) => setCurrentCompany(e.target.value)}
          ></input>
          <button className="btn btn-success mt-1">Add</button>
        </div>
      </form>
    </>
  );
};

export default Create;
