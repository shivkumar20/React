import React from "react";

// Card(props)
function Card({username,btnText ="my profile",myimg}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={myimg}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover mt-4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>  
        {/* {props.username} */}
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          { /* {props.btnText || "My Profile"} → */  }
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
