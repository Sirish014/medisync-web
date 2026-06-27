import "./HospitalInfo.css";
import Navbar from "../../../components/Navbar/Navbar";

function HospitalInfo(){

return(

<>

<Navbar/>

<div className="hospitalContainer">

<h2>Hospital Information</h2>

<div className="hospitalCard">

<div className="hospitalHeader">

<img
src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
alt=""
/>

<div>

<h3>MediSync Hospital</h3>

<p>Central Hospital Administration</p>

</div>

</div>

<div className="formGrid">

<input
defaultValue="MediSync Hospital"
/>

<input
defaultValue="admin@medisync.com"
/>

<input
placeholder="Phone Number"
/>

<input
placeholder="Address"
/>

<input
placeholder="Website"
/>

<input
placeholder="Registration Number"
/>

</div>

<div className="buttonArea">

<button>

Save Changes

</button>

</div>

</div>

</div>

</>

)

}

export default HospitalInfo;