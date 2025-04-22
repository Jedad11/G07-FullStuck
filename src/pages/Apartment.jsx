import React from 'react'
import Card from '../component/Card.jsx'
import Back from '../component/Back.jsx'
import Sort from '../component/Sort.jsx'

function Apartment() {
  return (
    <div className='max-w-[1306px] mx-auto'>
      <Back/>
      <h1 className='text-xl font-bold leading-snug md:text-5xl ml-18'>Apartment near 
      <br />King Mongkut's University of Technology Thonburi</h1>
      <div className="h-px bg-gray-300 my-4" />
      <Sort/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Apartment