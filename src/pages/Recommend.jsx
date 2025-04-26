import React from "react";

import Card from '../component/Card.jsx'
import Back from '../component/Back.jsx'
import Sort from "../component/Sort.jsx";

function Recommend() {
  return (
    <div className='md:max-w-[768px] xl:max-w-[1306px] mx-auto'>
      <Back/>
      <h1 className='xl:text-[50px] md:text-[24px] text-[20px] font-bold leading-snug ml-18'>Recommendation room near 
      <br />King Mongkut's University of Technology Thonburi</h1>
      <div className="h-px bg-gray-300 my-4" />
      <Sort/>
      <div className="space-y-4">
        <Card Name="A" Floor="8" Price="8,500" />
        <Card Name="B" Floor="10" Price="10,500" />
        <Card Name="C" Floor="9" Price="4,000" className="hidden md:block" />
        <Card Name="D" Floor="8" Price="5,600" className="hidden xl:block" />
        <Card Name="E" Floor="5" Price="2,000" className="hidden xl:block" />
      </div>
    </div>
  )
}

export default Recommend