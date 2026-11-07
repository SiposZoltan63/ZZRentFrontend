import React from 'react'
import Cards from '../components/Cards'

export default function Home(props) {
  return (
    <div className="tartalom">
      <div className="row g-4 justify-content-center w-100" id="carContainer">
        <Cards title="Passenger Cars" src="url" text="For 4-5 passengers" linktext="View Details" link="/Cars"/>
        <Cards title="Minibuses" src="url" text="For 6-9 passengers" linktext="View Details" link="/Minibuses"/>
        <Cards title="Cargo Vans" src="url" text="For moving & transport" linktext="View Details" link="/Vans"/>
      </div>
    </div>
  )
}