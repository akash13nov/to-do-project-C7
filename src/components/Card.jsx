import React from "react";

const Card = (props) => {
  return (
    <div className="w-[340px] bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.06)]">
      <div className="h-[120px] relative">
        <img
          src={props.elem.coverurl}
          alt="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="flex justify-center -mt-12 relative z-10">
        <img
          src={props.elem.profileurl}
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-[#0f0f0f] object-cover shadow-lg"
        />
      </div>
      <div className="px-6 pb-6 text-center mt-3">
        <h2 className="text-xl font-semibold text-white">
          {props.elem.fullname}
        </h2>

        <p className="text-sm text-gray-400 mt-1">{props.elem.role}</p>

        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          {props.elem.desc}
        </p>

        <p className="text-sm text-gray-400 mt-4 flex justify-center items-center gap-1">
          📍 {props.elem.location}
        </p>
        <button
          onClick={() => {
            props.deleteHandler();
          }}
          className="mt-6 w-full h-[42px] rounded-lg bg-red-500 text-white font-medium cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
