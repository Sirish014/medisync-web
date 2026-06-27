import "./ChangePassword.css";
import Navbar from "../../../components/Navbar/Navbar";

function ChangePassword(){

return(

<>

<Navbar/>

<div className="passwordContainer">

<h2>Change Password</h2>

<div className="passwordCard">

<input
type="password"
placeholder="Current Password"
name="currentPassword"
autoComplete="new-password"
/>

<input
type="password"
placeholder="New Password"
name="newPassword"
autoComplete="new-password"
/>

<input
type="password"
placeholder="Confirm Password"
name="confirmPassword"
autoComplete="new-password"
/>

<button>

Update Password

</button>

</div>

</div>

</>

)

}

export default ChangePassword;