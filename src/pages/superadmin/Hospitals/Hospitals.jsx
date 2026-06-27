import { useState } from "react";

import hospitalsData from "../../../data/hospitals";
import HospitalModal from "../../../components/SuperAdmin/HospitalModal";

import "./Hospitals.css";

function Hospitals() {

const [hospitals, setHospitals] = useState(hospitalsData);

const [search, setSearch] = useState("");

const [openModal, setOpenModal] = useState(false);

const [selectedHospital, setSelectedHospital] = useState(null);


const filteredHospitals = hospitals.filter(

hospital =>

hospital.hospitalName
?.toLowerCase()
.includes(search.toLowerCase())

);


const handleAdd = () => {

setSelectedHospital(null);

setOpenModal(true);

};


const handleEdit = (hospital) => {

setSelectedHospital(hospital);

setOpenModal(true);

};


const handleSave = (hospitalData) => {

if(selectedHospital){

setHospitals(

hospitals.map(

hospital =>

hospital.id===selectedHospital.id

? {

...hospitalData,
id:selectedHospital.id

}

: hospital

)

);

}

else{

setHospitals([

...hospitals,

{

...hospitalData,
id:Date.now()

}

]);

}

setOpenModal(false);

};


const handleDelete=(id)=>{

setHospitals(

hospitals.filter(

hospital=>hospital.id!==id

)

);

};


return (

<div className="hospitals-container">

<div className="hospital-header">

<h1>

Hospitals Management

</h1>

<button
className="add-btn"
onClick={handleAdd}
>

+ Add Hospital

</button>

</div>


<input

className="search-box"

placeholder="Search hospital..."

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>


<div className="table-container">

<table>

<thead>

<tr>

<th>Name</th>

<th>Admin</th>

<th>Plan</th>

<th>Status</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

filteredHospitals.map(

hospital => (

<tr key={hospital.id}>

<td>

{hospital.hospitalName}

</td>

<td>

{hospital.adminEmail}

</td>

<td>

<span
className={`badge ${hospital.plan}`}
>

{hospital.plan}

</span>

</td>

<td>

<span
className={`status ${hospital.status}`}
>

{hospital.status}

</span>

</td>

<td>

<button
onClick={()=>handleEdit(hospital)}
>

✏️

</button>

<button
onClick={()=>handleDelete(hospital.id)}
>

🗑️

</button>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>


{

openModal && (

<HospitalModal

hospital={selectedHospital}

onClose={()=>

setOpenModal(false)

}

onSave={handleSave}

/>

)

}

</div>

);

}

export default Hospitals;