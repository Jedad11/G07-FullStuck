import React from 'react'
import Logo from "../image/logorestrent.png";
const Footer = () => {
  return (
    <div className='bg-gray-800'>
        <div>

            <div className='flex'>
                <div>
                <img
                src={Logo}
                alt="restrent logo"
                className="w-25 h-25 object-contain"
              />
              <h1 className="w-14 font-bold text-white text-2xl">
                Rest
                <br />
                Rent
              </h1>
                </div>
            </div>
        </div>
    </div>
  )
  }
export default Footer