const activities=[

{
icon:"🏥",
text:"City General Hospital added"
},

{
icon:"🔄",
text:"Sunrise Health renewed plan"
},

{
icon:"✏️",
text:"Hope Hospital updated"
},

{
icon:"👤",
text:"Hospital admin account created"
}

];


function ActivityCard(){

return(

<div className="activity-card">

<h2>

Recent Activities

</h2>

{

activities.map(

(activity,index)=>(

<div
className="activity-item"
key={index}
>

<div
className="activity-icon"
>

{activity.icon}

</div>

<p>

{activity.text}

</p>

</div>

)

)

}

</div>

)

}

export default ActivityCard;