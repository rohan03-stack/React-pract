import React from 'react'

export const Navbar = () => {
  return (
 <header className='h-40'>
    <div className="nav flex mx-40 my-4 ">
        <div className="logo ">
<img src="https://w7.pngwing.com/pngs/367/814/png-transparent-zomato-logo.png" className='w-50 h-15  ' alt="" />

        </div>

        <div className="flex items-center border rounded-2xl h-14 ml-5 shadow-lg  w-190">
    
      <div className="flex items-center mx-4  w-50 space-x-1 text-gray-600">
       <i class="fa-solid fa-location-dot text-pink-500 text-[20px]" ></i>
        <span className='text-[14px] font-normal ml-2'>Mumbai</span>
      <select name="" id="" className='ml-30'></select>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300 mx-4"></div>

      <div className="flex items-center flex-grow text-gray-500">
       <i class="fa-solid fa-magnifying-glass text-[20px]"></i>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="w-full outline-none bg-transparent text-[14px] ml-3 font-normal"
        />
      </div>
    </div>

    <div className="sign ml-20 text-[18px] font-light text-gray-400 mt-3">
       <a href="" className='mr-4'>Login</a>
       <a href="">Sign up</a>
    </div>
    </div>
</header>
  )
}
