import hospitals from "./hospitals";

const yearlyRevenue={};

hospitals.forEach(

hospital=>{

const year=

hospital.renewalDate
.split("-")[0];


const amount=

hospital.plan==="Enterprise"

?5000

:3000;


yearlyRevenue[year]=

(yearlyRevenue[year] || 0)

+amount;

}

);


export const revenueData=

Object.entries(yearlyRevenue)

.map(

([year,revenue])=>({

year,
revenue

})

);