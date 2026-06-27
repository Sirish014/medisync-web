import hospitals from "./hospitals";

export const hospitalStats=[

{
title:"Total Hospitals",
value:hospitals.length,
icon:"🏥"
},

{
title:"Active",
value:
hospitals.filter(
hospital=>hospital.status==="Active"
).length,
icon:"✅"
},

{
title:"Pro Plan",
value:
hospitals.filter(
hospital=>hospital.plan==="Pro"
).length,
icon:"⭐"
},

{
title:"Enterprise",
value:
hospitals.filter(
hospital=>hospital.plan==="Enterprise"
).length,
icon:"👑"
}

];


export const subscriptionData=[

{
name:"Pro",
value:
hospitals.filter(
hospital=>hospital.plan==="Pro"
).length
},

{
name:"Enterprise",
value:
hospitals.filter(
hospital=>hospital.plan==="Enterprise"
).length
}];


export const growthData=[

{
month:"Jan",
count:1
},

{
month:"Feb",
count:2
},

{
month:"Mar",
count:2
},

{
month:"Apr",
count:3
},

{
month:"May",
count:4
},

{
month:"Jun",
count:5
}

];