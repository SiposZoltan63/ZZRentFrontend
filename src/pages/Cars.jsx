import React from 'react'
import Cards from '../components/Cards'

export default function Cars(props) {
  return (
    <div className="tartalom">
      <div className="row g-4 justify-content-center w-100" id="carContainer">
        <Cards title="Subaru Impreza GC8" src="url" text="For 4-5 passengers" linktext="Rent Now" link=""/>
        <Cards title="Toyota Prius" src="url" text="For 6-9 passengers" linktext="Rent Now" link=""/>
        <Cards title="Ford Estate" src="url" text="For moving & transport" linktext="Rent Now Details" link=""/>
      </div>
    </div>
  )
}