import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/login.css";

function Login(){
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
        reg_num: "",
        add: "",
      role: "",
  });
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formdata);
    setTimeout(()=>{
      if (
      formdata.email === "imrannaseer@karunya.edu.in" &&
      formdata.password === "1234"
    ) {
      Navigate("/show-student");
    } else {
      console.log("Invalid credentials");
      setLoading(false);
    }
    }, 7000);
    
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={onSubmit} className="login-form">
          <h1>LOGIN</h1>

        <input
          type="text"
          placeholder="User Name"
          required
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="login-button" disabled={loading}>
          {`${loading ? "Connecting NASA's WIFI" : "Login"}`}
        </button>
        <p>Enter your valid credentials to login</p>
      </form>
      </div>
      <h1></h1>
    </div>
  );
}

export default Login;