import { NavLink, useNavigate } from "react-router-dom";

import {
FaChartPie,
FaHospital,
FaCreditCard,
FaSignOutAlt
}

from "react-icons/fa";

import "./SuperAdminSidebar.css";

function SuperAdminSidebar() {

const navigate=useNavigate();


const handleLogout=()=>{

localStorage.removeItem("user");

navigate("/");

};


const menuItems=[

{
title:"Dashboard",
path:"/superadmin/dashboard",
icon:<FaChartPie/>
},

{
title:"Hospitals",
path:"/superadmin/hospitals",
icon:<FaHospital/>
},

{
title:"Subscriptions",
path:"/superadmin/subscriptions",
icon:<FaCreditCard/>
}

];


return(

<div className="super-sidebar">

<div className="super-logo">

❤ MediSync

</div>


<div className="super-menu">

{

menuItems.map((item,index)=>(

<NavLink
key={index}
to={item.path}
className={({isActive})=>

isActive
?
"menu-item active"
:
"menu-item"

}
>

{item.icon}

<span>

{item.title}

</span>

</NavLink>

))

}

</div>


<div
className="logout-btn"
onClick={handleLogout}
>

<FaSignOutAlt/>

<span>

Logout

</span>

</div>

</div>

);

}

export default SuperAdminSidebar;