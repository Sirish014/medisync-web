import "./Navbar.css";

import {
MdNotifications,
MdAccountCircle,
MdLogout,
MdPerson,
MdLock
}
from "react-icons/md";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Navbar(){

const navigate=useNavigate();

const [showMenu,setShowMenu]=useState(false);

const logout=()=>{

localStorage.removeItem("token");

navigate("/");

};

return(

<div className="navbar">

<input
type="text"
placeholder="Search patients, staff..."
name="hospitalSearch"
autoComplete="off"
/>

<div className="right">

<div className="icon">

<MdNotifications size={25}/>

</div>

<div
className="profileContainer"
onClick={()=>setShowMenu(!showMenu)}
>

<MdAccountCircle
size={42}
className="profilePic"
/>

{
showMenu && (

<div className="profileDropdown">

<div className="profileHeader">

<h4>Hospital Admin</h4>

<p>
admin@medisync.com
</p>

</div>

<div
className="menuItem"
onClick={()=>navigate("/hospital-info")}
>

<MdPerson/>

<span>
Hospital Information
</span>

</div>

<div
className="menuItem"
onClick={()=>navigate("/change-password")}
>

<MdLock/>

<span>
Change Password
</span>

</div>

<div
className="menuItem logout"
onClick={logout}
>

<MdLogout/>

<span>
Logout
</span>

</div>

</div>

)

}

</div>

</div>

</div>

)

}

export default Navbar;