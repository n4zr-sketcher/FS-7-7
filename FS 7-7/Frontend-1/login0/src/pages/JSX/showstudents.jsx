import { useEffect, useState } from "react";
import students from "../../data/studentdata";
import Sidebar from "../../components/Sidebar";
import "../CSS/showstudent.css";


function ShowStudent() {
  const [loading, setLoading] = useState(true);
  const [loggedin, setLoggedin] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("use effect called");
  },[loading]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loading">Loading the page ...</div>
  ) : (
    <div className="show-student-container">
      <div className="sidebar-container">
        <Sidebar />
        {loggedin && <p>Welcome, {loggedin}</p>}
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowStudent;