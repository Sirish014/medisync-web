import "./Dashboard.css";

import Navbar from "../../../components/Navbar/Navbar";
import DashboardCard from "../../../components/DashboardCard/DashboardCard";
import AppointmentChart from "../../../components/AppointmentChart/AppointmentChart";

import {
stats,
activities
}
from "../../../data/dashboardData";

import {
appointments
}
from "../../../data/appointmentData";

function Dashboard(){

return(

<>

<Navbar/>

<h2>Admin Dashboard</h2>

<div className="cards">

{
stats.map((item,index)=>(

<DashboardCard
key={index}
{...item}
/>

))
}

</div>

<div className="middle-section">

<div className="chart">

<h3>
Appointment Overview
</h3>

<AppointmentChart/>

</div>

<div className="activity">

<h3>
Recent Activities
</h3>

{
activities.map((item,index)=>(

<p key={index}>
• {item}
</p>

))
}

</div>

</div>

<div className="table-section">

<h3>
Pending Appointments
</h3>

<table>

<thead>

<tr>

<th>Patient</th>
<th>Doctor</th>
<th>Department</th>
<th>Status</th>

</tr>

</thead>

<tbody>

{
appointments.map((item,index)=>(

<tr key={index}>

<td>{item.patient}</td>
<td>{item.doctor}</td>
<td>{item.department}</td>
<td>{item.status}</td>

</tr>

))
}

</tbody>

</table>

</div>

</>

)

}

export default Dashboard;