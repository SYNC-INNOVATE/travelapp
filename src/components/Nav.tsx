import React from 'react'

const Nav = () => {
  return (
    <div className="flex items-center justify-center w-10/12 mt-6">
      <nav className="flex justify-between items-center  w-full">
        <div>TravelMate</div>
        <div className="w-3/6 ">
          <ul className=" flex justify-between ">
            <li>Home</li>
            <li>Discover</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
        </div>
        <div>image</div>
      </nav>
    </div>
  );
}

export default Nav