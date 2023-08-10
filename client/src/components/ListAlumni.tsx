import React, { useEffect, useState } from "react";
import EditAlumni from "./EditAlumni";

export interface Alumni {
  id: number
  sId : string;
  name: string;
  branch: string;
  passoutYear: number;
  currentCompany: string;
}

const ListAlumni = () => {
  const [alumnis, setAlumnnis] = useState<Alumni[]>([]);

    const deleteAlumni = async (id:number) => {
        try {
            const deleteAlumni = await fetch(`http://localhost:5000/api/data/${id}`, {
                method: "DELETE"
            })
        } catch (err) {
            console.error(err);
        }
        setAlumnnis(alumnis.filter(alumni => alumni.id != id));
    }


  const getAlumnis = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/data");
      const jsonData = await res.json();

      setAlumnnis(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAlumnis();
  }, []);

  console.log(alumnis);
  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Details</th>
            <th>Add</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {alumnis.map((alumni) => (
            <tr key={alumni.sId}>
              <td>{alumni.sId}</td>
              <td>
                <ul>
                  <li>{alumni.name}</li>
                  <li>{alumni.branch}</li>
                  <li>{alumni.currentCompany}</li>
                  <li>{alumni.passoutYear}</li>
                </ul>
              </td>
              <td><EditAlumni alumni={alumni}/></td>
              <td><button className="btn btn-danger" onClick={() => deleteAlumni(alumni.id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListAlumni;
