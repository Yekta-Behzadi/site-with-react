import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = ({path,src,text,label}) => {
  return (
    <>
    <li className="cards__item">
      <Link className='cards__item__link' to={path} >
        <figure className="cards__item_pic-wrap" data-catergory={label} >
          <img src={src} alt="Travel Image" className="cards__item__img"/>
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text"> {text} </h5>
        </div>
      </Link>

    </li>
    </>
  )
}

export default CardItem
