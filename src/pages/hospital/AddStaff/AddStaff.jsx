import "./AddStaff.css";

import Navbar from "../../../components/Navbar/Navbar";

import {useNavigate} from "react-router-dom";

function AddStaff(){

const navigate=useNavigate();

return(

<>

<Navbar/>

<div className="addStaffContainer">

<div className="header">

<div>

<h1>Add New Staff</h1>

<p>
Fill in details for new staff member
</p>

</div>

<button
className="backBtn"
onClick={()=>navigate("/staff")}
>

Back to Staff

</button>

</div>

<form>

<div className="section">

<h2>Personal Information</h2>

<div className="formGrid">

<input
placeholder="First Name"
/>

<input
placeholder="Last Name"
/>

<input
type="date"
/>

<select>

<option>
Gender
</option>

<option>
Male
</option>

<option>
Female
</option>

</select>

<input
placeholder="Phone Number"
/>

<input
placeholder="Email Address"
/>

<input
type="file"
/>

</div>

</div>

<div className="section">

<h2>Work Information</h2>

<div className="formGrid">

<input
placeholder="Employee ID"
/>

<select>

<option>
Department
</option>

<option>
Cardiology
</option>

<option>
Neurology
</option>

<option>
Pediatrics
</option>

</select>

<input
placeholder="Role"
/>

<input
placeholder="Qualification"
/>

<input
placeholder="Experience"
/>

<input
type="date"
/>

<select>

<option>
Employment Type
</option>

<option>
Full Time
</option>

<option>
Part Time
</option>

</select>

<select>

<option>
Shift
</option>

<option>
Morning
</option>

<option>
Evening
</option>

</select>

<input
placeholder="Salary"
/>

</div>

</div>

<div className="section credentials">

<h2>

Login Credentials

</h2>

<div className="formGrid">

<input
placeholder="Email Login"
/>

<input
type="password"
placeholder="Password"
name="Password"
autoComplete="new-password"
/>

<input
type="password"
placeholder="Confirm Password"
name="confirmPassword"
autoComplete="new-password"
/>

</div>

</div>

<div className="buttonGroup">

<button
type="button"
className="cancelBtn"
onClick={()=>navigate("/staff")}
>

Cancel

</button>

<button
className="saveBtn"
type="submit"
>

Add Staff Member

</button>

</div>

</form>

</div>

</>

)

}

export default AddStaff;