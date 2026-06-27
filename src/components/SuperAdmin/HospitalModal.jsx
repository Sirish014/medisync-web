import { useState } from "react";
import "./HospitalModal.css";

function HospitalModal({

hospital,
onClose,
onSave

}){

const [formData,setFormData]=useState({

hospitalName:
hospital?.hospitalName || "",

registrationNo:
hospital?.registrationNo || "",

hospitalEmail:
hospital?.hospitalEmail || "",

phone:
hospital?.phone || "",

hospitalType:
hospital?.hospitalType || "",

beds:
hospital?.beds || "",


adminName:
hospital?.adminName || "",

adminEmail:
hospital?.adminEmail || "",

tempPassword:
hospital?.tempPassword || "",


country:
hospital?.country || "",

state:
hospital?.state || "",

city:
hospital?.city || "",

zipCode:
hospital?.zipCode || "",


departments:
hospital?.departments || "",

establishedYear:
hospital?.establishedYear || "",


plan:
hospital?.plan || "Pro",

renewalDate:
hospital?.renewalDate || "",

status:
hospital?.status || "Active"

});


const handleChange=(e)=>{

setFormData({

...formData,
[e.target.name]:
e.target.value

});

};


const handleSubmit=(e)=>{

e.preventDefault();

onSave(formData);

};


return(

<div className="modal-overlay">

<div className="modal-box">

<h2>

{
hospital
?
"Edit Hospital"
:
"Register Hospital"
}

</h2>


<form onSubmit={handleSubmit}>


<h3>Hospital Information</h3>

<input
name="hospitalName"
placeholder="Hospital Name"
value={formData.hospitalName}
onChange={handleChange}
/>

<input
name="registrationNo"
placeholder="Registration Number"
value={formData.registrationNo}
onChange={handleChange}
/>

<input
name="hospitalEmail"
placeholder="Hospital Email"
value={formData.hospitalEmail}
onChange={handleChange}
/>


<h3>Admin Credentials</h3>

<input
name="adminName"
placeholder="Admin Name"
value={formData.adminName}
onChange={handleChange}
/>

<input
name="adminEmail"
placeholder="Admin Email"
value={formData.adminEmail}
onChange={handleChange}
/>

<input
name="tempPassword"
placeholder="Temporary Password"
value={formData.tempPassword}
onChange={handleChange}
/>


<h3>Subscription</h3>

<select
name="plan"
value={formData.plan}
onChange={handleChange}
>

<option value="Pro">

Pro

</option>

<option value="Enterprise">

Enterprise

</option>

</select>


<select
name="status"
value={formData.status}
onChange={handleChange}
>

<option value="Active">

Active

</option>

<option value="Inactive">

Inactive

</option>

</select>


<div className="modal-buttons">

<button
type="button"
onClick={onClose}
>

Cancel

</button>


<button type="submit">

Save Hospital

</button>

</div>

</form>

</div>

</div>

)

}

export default HospitalModal;