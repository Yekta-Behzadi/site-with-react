import React from 'react'
import CardItem from '../cardItem/CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards' >
      <h1> Check out these EPIC Destination!</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src='images/img-9.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='s' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
