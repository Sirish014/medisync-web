import "./Staff.css";
import Navbar from "../../../components/Navbar/Navbar";

import { staffData } from "../../../data/staffData";

import { useNavigate } from "react-router-dom";

import {
MdVisibility,
MdEdit,
MdDelete,
MdSearch
}
from "react-icons/md";

function Staff(){

const navigate = useNavigate();

return(

<>

<Navbar/>

<h2>Staff Directory</h2>

<div className="stats">

<div className="box">
<h4>Total Staff</h4>
<h2>1248</h2>
</div>

<div className="box">
<h4>Active Now</h4>
<h2>312</h2>
</div>

<div className="box">
<h4>On Leave</h4>
<h2>42</h2>
</div>

<div className="box">
<h4>New Hires</h4>
<h2>15</h2>
</div>

</div>

<div className="tableCard">

<div className="tableHeader">

<div className="searchBox">

<MdSearch/>

<input
type="text"
placeholder="Search staff..."
/>

</div>

<div className="controls">

<select>

<option>
All Departments
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

<button
onClick={()=>navigate("/addstaff")}
>

+ Add Staff

</button>

</div>

</div>

<table>

<thead>

<tr>

<th>Staff Member</th>
<th>Employee ID</th>
<th>Department</th>
<th>Role</th>
<th>Status</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{
staffData.map((staff,index)=>(

<tr key={index}>

<td>

<div className="profile">

<img
src={staff.image}
alt={staff.name}
/>

<div>

<h4>{staff.name}</h4>

<p>{staff.email}</p>

</div>

</div>

</td>

<td>{staff.id}</td>

<td>

<span className="department">

{staff.department}

</span>

</td>

<td>

{staff.role}

</td>

<td>

<span
className={
staff.status
.replace(/\s/g,"")
.toLowerCase()
}
>

{staff.status}

</span>

</td>

<td>

<div className="actions">

<MdVisibility/>

<MdEdit/>

<MdDelete/>

</div>

</td>

</tr>

))
}

</tbody>

</table>

</div>

</>

)

}

export default Staff;