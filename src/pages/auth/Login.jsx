import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

const navigate = useNavigate();

const [formData,setFormData]=useState({
email:"",
password:""
});

const [error,setError]=useState("");


// Mock users
const users=[

{
email:"super@medisync.com",
password:"123456",
role:"superadmin"
},

{
email:"hospital@medisync.com",
password:"123456",
role:"hospitaladmin"
}

];


const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:e.target.value

})

};


const handleSubmit=(e)=>{

e.preventDefault();

setError("");

const user=users.find(

u =>
u.email===formData.email &&
u.password===formData.password

);


if(user){

// Store user info for later use

localStorage.setItem(
"user",
JSON.stringify(user)
);


// Redirect according to role

if(user.role==="superadmin"){

navigate("/superadmin/dashboard");

}

else{

navigate("/hospital/dashboard");

}

}

else{

setError("Invalid email or password");

}

};


return (

<div className="login-page">

{/* Left Side */}

<div className="left-panel">

<div className="brand">

<div className="logo-box">
❤
</div>

<h1>MediSync</h1>

</div>


<div className="hero-content">

<h2>

Smart Hospital <br/>
Management System

</h2>

<p>

Streamline hospital operations,
manage staff efficiently and provide
better patient care.

</p>

</div>


<div className="stats-card">

<div className="stat">

<h3>500+</h3>
<span>Staff</span>

</div>

<div className="stat">

<h3>50+</h3>
<span>Departments</span>

</div>

<div className="stat">

<h3>10K+</h3>
<span>Patients</span>

</div>

</div>

</div>


{/* Right Side */}

<div className="right-panel">

<div className="login-card">

<div className="login-icon">

🔒

</div>

<h2>
Welcome Back
</h2>

<p>
Sign in to continue to MediSync
</p>


<form onSubmit={handleSubmit}>

<input
type="email"
name="email"
placeholder="Enter your email"
value={formData.email}
onChange={handleChange}
required
/>

<input
type="password"
name="password"
placeholder="Enter your password"
value={formData.password}
onChange={handleChange}
required
/>

{error && (

<p className="error-message">
{error}
</p>

)}

<div className="options">

<label>

<input type="checkbox"/>

Remember me

</label>

<span>
Forgot Password?
</span>

</div>

<button type="submit">

Sign In →

</button>

</form>


<div className="signup-text">

Don't have an account?

<span>
Sign Up
</span>

</div>


{/* Demo credentials */}

<div className="demo-users">

<p>

<b>Super Admin:</b><br/>

super@medisync.com

</p>

<p>

<b>Hospital Admin:</b><br/>

hospital@medisync.com

</p>

<p>Password: 123456</p>

</div>

</div>

</div>

</div>

);

}

export default Login;