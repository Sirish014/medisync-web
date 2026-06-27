import {

LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}

from "recharts";

import { revenueData }
from "../../data/revenueData";


function RevenueChart(){

return(

<div className="chart-card">

<h3>

Revenue Trend

</h3>

<ResponsiveContainer
width="100%"
height={300}
>

<LineChart
data={revenueData}
>

<XAxis dataKey="year"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="revenue"
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}

export default RevenueChart;