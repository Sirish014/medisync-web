import "./Dashboard.css";

import AnalyticsCard
from "../../../components/SuperAdmin/AnalyticsCard";

import SubscriptionPieChart
from "../../../components/SuperAdmin/SubscriptionPieChart";

import RevenueChart
from "../../../components/SuperAdmin/RevenueChart";

import PlanBarChart
from "../../../components/SuperAdmin/PlanBarChart";

import ProfileCard
from "../../../components/SuperAdmin/ProfileCard";

import ActivityCard
from "../../../components/SuperAdmin/ActivityCard";

import {

hospitalStats

}

from "../../../data/hospitalData";


function Dashboard(){

return(

<div className="dashboard">

<div className="stats-grid">

{

hospitalStats.map(

(item,index)=>(

<AnalyticsCard
key={index}
{...item}
/>

)

)

}

</div>


<RevenueChart/>


<div className="charts-grid">

<SubscriptionPieChart/>

<PlanBarChart/>

</div>


<div className="charts-grid">

<ProfileCard/>

<ActivityCard/>

</div>

</div>

)

}

export default Dashboard;