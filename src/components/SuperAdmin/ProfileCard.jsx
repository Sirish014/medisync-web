import hospitals from "../../data/hospitals";

function ProfileCard(){

const user=
JSON.parse(
localStorage.getItem("user")
);

const activeSubscriptions=

hospitals.filter(

hospital=>
hospital.status==="Active"

).length;


const today=
new Date()
.toLocaleDateString();


return(

<div className="profile-card">

<div className="profile-header">

<div className="avatar">

👤

</div>

<div>

<h2>

{user?.role==="superadmin"

?"Super Admin"

:"Admin"}

</h2>

<p>

{user?.email}

</p>

</div>

</div>


<div className="profile-stats">

<div>

<h3>

{hospitals.length}

</h3>

<span>

Hospitals

</span>

</div>

<div>

<h3>

{activeSubscriptions}

</h3>

<span>

Subscriptions

</span>

</div>

</div>


<div className="profile-footer">

<p>

🕒 Last Login:
{today}

</p>

</div>

</div>

)

}

export default ProfileCard;