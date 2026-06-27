import { Outlet } from "react-router-dom";

import SuperAdminSidebar from "../components/SuperAdminSidebar/SuperAdminSidebar";

function SuperAdminLayout(){

return(

<div className="app-container">

<SuperAdminSidebar/>

<div
className="content"
style={{
marginLeft:"260px",
padding:"20px"
}}
>

<Outlet/>

</div>

</div>

)

}

export default SuperAdminLayout;