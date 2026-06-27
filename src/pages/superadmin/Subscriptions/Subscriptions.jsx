import { useState } from "react";
import subscriptionsMock from "../../../data/subscriptions";

import "./Subscriptions.css";

function Subscriptions(){

const [subscriptions,setSubscriptions]
=useState(subscriptionsMock);


const totalRevenue=subscriptions.reduce(

(total,item)=>total+item.price,
0

);

const activePlans=subscriptions.filter(

plan=>plan.status==="Active"

).length;


const handleRenew=(id)=>{

const nextYear=new Date();

nextYear.setFullYear(

nextYear.getFullYear()+1

);

const renewalDate=
nextYear
.toISOString()
.split("T")[0];


setSubscriptions(

subscriptions.map(

sub=>

sub.id===id

?{

...sub,
renewal:renewalDate,
status:"Active"

}

:sub

)

);

};


return(

<div className="subscriptions-container">

<h1>

Subscription Management

</h1>


<div className="cards-grid">

<div className="analytics-card">

<h3>

Rs {totalRevenue}

</h3>

<p>

Total Revenue

</p>

</div>


<div className="analytics-card">

<h3>

{activePlans}

</h3>

<p>

Active Plans

</p>

</div>

</div>


<div className="table-container">

<table>

<thead>

<tr>

<th>Hospital</th>
<th>Plan</th>
<th>Price</th>
<th>Renewal</th>
<th>Status</th>
<th>Actions</th>

</tr>

</thead>


<tbody>

{

subscriptions.map(

sub=>(

<tr key={sub.id}>

<td>

{sub.hospital}

</td>

<td>

<span
className={`badge ${sub.plan}`}
>

{sub.plan}

</span>

</td>

<td>

Rs {sub.price}

</td>

<td>

{sub.renewal}

</td>

<td>

<span
className={`status ${sub.status}`}
>

{sub.status}

</span>

</td>

<td>

<div className="action-buttons">

<button
className="renew-btn"
onClick={()=>
handleRenew(sub.id)
}
>

🔄 Renew

</button>

</div>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

</div>

)

}

export default Subscriptions;