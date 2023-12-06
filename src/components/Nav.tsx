import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-center'>
      <nav className="flex justify-between w-10/12 mt-6">
        <div>TravelAdvisors</div>
        <div className="w-3/6 bg-slate-600">
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