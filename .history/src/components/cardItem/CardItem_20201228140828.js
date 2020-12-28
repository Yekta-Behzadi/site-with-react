import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = () => {
  return (
    <>
    <li className="cards__item">
      <Link className='cards__item__link' >
        <figure className="card__item_pic-wrap">
          <img src="" alt="" className="cards__item__img"/>
        </figure>
      </Link>

    </li>
    </>
  )
}

export default CardItem
