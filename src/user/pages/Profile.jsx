import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Long",
    email: "long@gmail.com",
    phone: "0123456789",
    address: "Ho Chi Minh City",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profile-page">

      <h2>My Profile</h2>

      <div className="profile-form">

        <label>Full Name</label>

        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <label>Email</label>

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Phone</label>

        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />

        <label>Address</label>

        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
        />

        <button>
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;