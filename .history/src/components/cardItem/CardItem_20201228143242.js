import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = ({path,src,text,label}) => {
  return (
    <>
    <li className="cards__item">
      <Link className='cards__item__link' to={path} >
        <figure className="card__item_pic-wrap">
          <img src="/" alt="Travel Image" className="cards__item__img"/>
        </figure>
        <div className="card__item__info">
          <h5 className="cards__item__text"></h5>
        </div>
      </Link>

    </li>
    </>
  )
}

export default CardItem
