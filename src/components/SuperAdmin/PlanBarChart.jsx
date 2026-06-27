import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}

from "recharts";

import {
growthData
}

from "../../data/hospitalData";


function PlanBarChart(){

return(

<div className="chart-card">

<h3>

Hospital Growth

</h3>

<ResponsiveContainer
width="100%"
height={300}
>

<BarChart
data={growthData}
>

<XAxis
dataKey="month"
/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="count"
/>

</BarChart>

</ResponsiveContainer>

</div>

)

}

export default PlanBarChart;