import {
BrowserRouter,
Routes,
Route
}

from "react-router-dom";


// Auth

import Login from "./pages/auth/Login";


// Hospital Pages

import Dashboard from "./pages/hospital/Dashboard/Dashboard";
import Staff from "./pages/hospital/Staff/Staff";
import AddStaff from "./pages/hospital/AddStaff/AddStaff";
import HospitalInfo from "./pages/hospital/HospitalInfo/HospitalInfo";
import ChangePassword from "./pages/hospital/ChangePassword/ChangePassword";


// Super Admin Pages

import SuperDashboard from "./pages/superadmin/Dashboard/Dashboard";
import Hospitals from "./pages/superadmin/Hospitals/Hospitals";
import Subscriptions from "./pages/superadmin/Subscriptions/Subscriptions";


// Layouts

import HospitalLayout from "./layouts/HospitalLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";


function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Login/>}
/>


<Route
path="/hospital"
element={<HospitalLayout/>}
>

<Route
path="dashboard"
element={<Dashboard/>}
/>

<Route
path="staff"
element={<Staff/>}
/>

<Route
path="addstaff"
element={<AddStaff/>}
/>

<Route
path="hospital-info"
element={<HospitalInfo/>}
/>

<Route
path="change-password"
element={<ChangePassword/>}
/>

</Route>


<Route
path="/superadmin"
element={<SuperAdminLayout/>}
>

<Route
path="dashboard"
element={<SuperDashboard/>}
/>

<Route
path="hospitals"
element={<Hospitals/>}
/>

<Route
path="subscriptions"
element={<Subscriptions/>}
/>

</Route>

</Routes>

</BrowserRouter>

)

}

export default App;