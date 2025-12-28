import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [fullname, setfullName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [profileurl, setProfileUrl] = useState("");
  const [coverurl, setCoverUrl] = useState("");

  const [allprofile, setallProfile] = useState([]);

  const formHandler = (event) => {
    event.preventDefault();

    setallProfile([
      ...allprofile,
      { fullname, role, location, desc, profileurl, coverurl },
    ]);

    setfullName("");
    setRole("");
    setLocation("");
    setDesc("");
    setProfileUrl("");
    setCoverUrl("");
  };

  const deleteHandler = (idx) => {
    const copyProfile = [...allprofile];
    copyProfile.splice(idx, 1);
    setallProfile(copyProfile);
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-2.5">
      <form
        onSubmit={(event) => {
          formHandler(event);
        }}
        className="w-full bg-[#0f0f0f] p-[20px] rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Create Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Full Name
            </label>
            <input
              onChange={(e) => {
                setfullName(e.target.value);
              }}
              value={fullname}
              type="text"
              placeholder="John Doe"
              className="w-full h-[42px] px-4 bg-transparent border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Role</label>
            <input
              onChange={(e) => {
                setRole(e.target.value);
              }}
              value={role}
              type="text"
              placeholder="Frontend Developer"
              className="w-full h-[42px] px-4 bg-transparent
                     border border-[#2a2a2a] rounded-md
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-white
                     transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Location</label>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              value={location}
              type="text"
              placeholder="Bengaluru, India"
              className="w-full h-[42px] px-4 bg-transparent
                     border border-[#2a2a2a] rounded-md
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-white
                     transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Description
            </label>
            <input
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              value={desc}
              type="text"
              placeholder="Short bio"
              className="w-full h-[42px] px-4 bg-transparent
                     border border-[#2a2a2a] rounded-md
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-white
                     transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Profile Image URL
            </label>
            <input
              onChange={(e) => {
                setProfileUrl(e.target.value);
              }}
              value={profileurl}
              type="url"
              placeholder="https://images.unsplash.com/..."
              className="w-full h-[42px] px-4 bg-transparent
                     border border-[#2a2a2a] rounded-md
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-white
                     transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Cover Image URL
            </label>
            <input
              onChange={(e) => {
                setCoverUrl(e.target.value);
              }}
              value={coverurl}
              type="url"
              placeholder="https://images.unsplash.com/..."
              className="w-full h-[42px] px-4 bg-transparent
                     border border-[#2a2a2a] rounded-md
                     text-white placeholder-gray-500
                     focus:outline-none focus:border-white
                     transition-colors"
              required
            />
          </div>
        </div>
        <div className="button-container flex items-center justify-center">
          <button
            className="mt-10 w-full h-[44px] rounded-lg
                 bg-white text-black font-semibold cursor-pointer
                 transition-transform duration-150
                 hover:scale-105 active:scale-95"
          >
            Create Card
          </button>
        </div>
      </form>

      <div className="w-full flex justify-start flex-wrap gap-8">
        {allprofile.map((elem, idx) => {
          return <Card elem={elem} deleteHandler={deleteHandler} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Form;
