import React from 'react'
import Cards from '../components/Cards'

export default function Minibuses(props) {
  return (
    <div className="tartalom">
      <div className="row g-4 justify-content-center w-100" id="carContainer">
        <Cards title="Mercedes-Benz V-Class" src="url" text="For 4-5 passengers" linktext="View Details" link=""/>
        <Cards title="Volkswagen Multivan" src="url" text="For 6-9 passengers" linktext="View Details" link=""/>
        <Cards title="Ford Tourneo Custom" src="url" text="For moving & transport" linktext="View Details" link=""/>
      </div>
    </div>
  )
}