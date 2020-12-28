import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = () => {
  return (
    <>
    <li className="cards__item">
      <Link className='cards__item__link' >
        <figure className="card__item_pic-wrap">
          <img src="/" alt="Travel Image" className="cards__item__img"/>
        </figure>
        <div className="card__item__info">
          <h5 className="cards__item"></h5>
        </div>
      </Link>

    </li>
    </>
  )
}

export default CardItem
