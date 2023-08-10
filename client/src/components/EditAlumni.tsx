import React, { useState } from "react";
import { Alumni } from "./ListAlumni";

interface Props {
  alumni: Alumni;
}

const EditAlumni = ({ alumni }: Props) => {
  console.log(alumni);
  const [sId, setSId] = useState(alumni.sId);
  const [name, setName] = useState(alumni.name);
  const [branch, setBranch] = useState(alumni.branch);
  const [currentCompany, setCurrentCompany] = useState(alumni.currentCompany);
  const [passoutYear, setPassoutYear] = useState(alumni.passoutYear);

  const updateAlumni = async (e: any) => {
    e.preventDefault();
    try {
      const body = { sId, name, branch, currentCompany, passoutYear };
      const res = await fetch(`http://localhost:5000/api/data/${alumni.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const win: Window = window;
      win.location = "/";
    } catch (err) {
      console.error(err);
    }
  };

  const setPrevious = () => {
    setSId(alumni.sId);
    setName(alumni.name);
    setBranch(alumni.branch);
    setPassoutYear(alumni.passoutYear);
    setCurrentCompany(alumni.currentCompany);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${alumni.id}`}
        onClick={() => setPrevious()}
      >
        EDIT
      </button>
      <div className="modal" id={`id${alumni.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Alumni</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setPrevious()}
              ></button>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                value={sId}
                onChange={(e) => setSId(e.target.value)}
              ></input>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="form-control"
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              ></input>
              <input
                className="form-control"
                type="text"
                value={passoutYear}
                onChange={(e) => setPassoutYear(parseInt(e.target.value))}
              ></input>
              <input
                className="form-control"
                type="text"
                value={currentCompany}
                onChange={(e) => setCurrentCompany(e.target.value)}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateAlumni(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setPrevious()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAlumni;
