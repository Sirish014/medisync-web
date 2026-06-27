import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

} from "recharts";

const data=[

{name:"Mon",value:20},
{name:"Tue",value:45},
{name:"Wed",value:35},
{name:"Thu",value:60},
{name:"Fri",value:50},
{name:"Sat",value:30},
{name:"Sun",value:20}

]

function AppointmentChart(){

return(

<ResponsiveContainer
width="100%"
height={300}
>

<BarChart data={data}>

<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>

<Bar
dataKey="value"
fill="#4338ca"
/>

</BarChart>

</ResponsiveContainer>

)

}

export default AppointmentChart;