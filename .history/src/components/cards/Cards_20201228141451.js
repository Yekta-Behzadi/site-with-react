import React from 'react'
import CardItem from '../cardItem/CardItem'

function Cards() {
  return (
    <div className='cards' >
      <h1> Check out these EPIC Destination!</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
