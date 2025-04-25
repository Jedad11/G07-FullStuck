import React from "react";

import Card from '../component/Card.jsx'
import Back from '../component/Back.jsx'
import Sort from "../component/Sort.jsx";

function Recommend() {
  return (
    <div className='max-w-[1306px] mx-auto'>
      <Back/>
      <h1 className='text-xl font-bold leading-snug md:text-5xl ml-18'>Recommendation room near 
      <br />King Mongkut's University of Technology Thonburi</h1>
      <div className="h-px bg-gray-300 my-4" />
      <Sort/>
      <Card Name="A" Floor="8" Price="8,500"/>
      <Card Name="B" Floor="10" Price="10,500"/>
      <Card Name="C" Floor="9" Price="4,000"/>
      <Card Name="D" Floor="8" Price="5,600"/>
      <Card Name="E" Floor="5" Price="2,000"/>
    </div>
  )
}

export default Recommend