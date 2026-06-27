import "./Sidebar.css";

import {
MdDashboard,
MdPeople
}
from "react-icons/md";

import {NavLink} from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h2>MediSync</h2>

<ul>

<li>

<NavLink
to="/dashboard"
className={({isActive}) =>
isActive ? "active-link":""
}
>

<MdDashboard/>

<span>
Dashboard
</span>

</NavLink>

</li>

<li>

<NavLink
to="/staff"
className={({isActive}) =>
isActive ? "active-link":""
}
>

<MdPeople/>

<span>
Staff
</span>

</NavLink>

</li>

</ul>

</div>

)

}

export default Sidebar;