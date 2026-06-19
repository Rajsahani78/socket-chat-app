import { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("John Doe");
  const [avatar, setAvatar] = useState(
    "https://i.pravatar.cc/300?img=12"
  );

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setAvatar(URL.createObjectURL(file));
  };

  const handleUpdate = () => {
    // call update profile api
    console.log({
      name,
      avatar,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold">
          My Profile
        </h1>

        {/* Avatar */}
        <div className="mb-8 flex flex-col items-center">
          <img
            src={avatar}
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-slate-200 object-cover"
          />

          <label className="mt-4 cursor-pointer rounded-xl bg-primary px-4 py-2 text-white">
            Change Photo

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-primary"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleUpdate}
            className="w-full rounded-xl bg-primary py-3 font-medium text-white transition hover:opacity-90"
          >
            Save Changes
          </button>

          <button
            onClick={handleLogout}
            className="w-full rounded-xl border border-red-500 py-3 font-medium text-red-500 transition hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;