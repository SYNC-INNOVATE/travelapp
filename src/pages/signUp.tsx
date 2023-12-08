import React from "react";

const signUp = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="m-auto w-2/6 bg-gray-300 mt-14 p-4 rounded-md  items-center">
        <p className="text-3xl">Sign Up</p>
        <p className="mt-2">Get Started by creating an account </p>
        <form className="mt-4">
          <div className="flex flex-col mb-4">
            <label>First Name</label>
            <input
              type="text"
              className="bg-transparent border-2 w-full h-11 rounded-md px-4"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Last Name</label>
            <input
              type="text"
              className="bg-transparent border-2 w-full h-11 rounded-md px-4"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input
              type="text"
              className="bg-transparent border-2 w-full h-11 rounded-md px-4"
              placeholder="Username"
            />
          </div>
          <button className="bg-green-400 rounded-md p-2">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default signUp;
