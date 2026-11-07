import React from 'react'
import Cards from '../components/Cards'

export default function Home(props) {
  return (
    <div className="tartalom">
      {/* Ez a row fogja össze az összes kártyát egy sorba és teszi őket középre */}
      <div className="row g-4 justify-content-center w-100" id="carContainer">
        <Cards title="Passenger Cars" src="url" text="Some quick example text..." />
        <Cards title="Minibuses" src="url" text="Some quick example text..." />
        <Cards title="Cargo Vans" src="url" text="Some quick example text..." />
      </div>
    </div>
  )
}