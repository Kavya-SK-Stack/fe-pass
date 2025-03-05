import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen px-6 sm:px-0 bg-gradient-to-tl from-orange-400 to-purple-600">
      <h2>
        {user ? (
          <div>
            <p className="text-4xl font-sans mt-6">
              HEY👋{" "}
              <span className="text-pink-400 font-extrabold">{user.name}</span>
            </p>

            <p className="font-sans ml-36">WELCOME TO PROFILE PAGE</p>
            <p className="font-sans ml-36">HERE YOU CAN EDIT YOUR PROFILE</p>
            <p className="font-sans ml-36">
              AND ALSO YOU CAN UPLOAD YOUR PROFILE PHOTO
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </h2>
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4 mt-5">Profile</h2>
        {user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button className="rounded-full px-6 py-2 bg-purple-600 text-white mr-2 mt-5 hover:bg-slate-500">
          Edit
        </button>
        <button className="rounded-full px-6 py-2 bg-purple-600 text-white hover:bg-slate-500">
          Logout
        </button>
        <br />
        <button className="rounded-full px-6 py-2 bg-purple-600 text-white mt-5 hover:bg-slate-500">
          Upload Profile Photo
        </button>
      </div>
    </div>
  );
}

export default Profile;
