import {

PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer

}

from "recharts";

import {
subscriptionData
}

from "../../data/hospitalData";


const COLORS=[

"#2563eb",
"#10b981"

];


function SubscriptionPieChart(){

return(

<div className="chart-card">

<h3>

Subscription Distribution

</h3>

<ResponsiveContainer
width="100%"
height={300}
>

<PieChart>

<Pie
data={subscriptionData}
dataKey="value"
nameKey="name"
outerRadius={100}
label
>

{

subscriptionData.map(

(entry,index)=>(

<Cell
key={index}
fill={
COLORS[index %
COLORS.length]
}
/>

)

)

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

)

}

export default SubscriptionPieChart;