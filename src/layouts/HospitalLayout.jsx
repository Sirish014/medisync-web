import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function HospitalLayout(){

return(

<div className="app-container">

<Sidebar/>

<div className="content">

<Outlet/>

</div>

</div>

)

}

export default HospitalLayout;