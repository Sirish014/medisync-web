import "./DashboardCard.css";

function DashboardCard({title,value,change,icon}){

return(

<div className="card">

<div>

<h4>{title}</h4>

<h2>{value}</h2>

<p>{change}</p>

</div>

<div className="icon">

{icon}

</div>

</div>

)

}

export default DashboardCard;