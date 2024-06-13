// import React from 'react'
import { Link } from 'react-router-dom'
import './Cinema.scss'

import dataFilms from '../../db/data'


const Cinema = () => {

  // console.log(dataFilms);

  return (
    <section className="cinema">
      <div className="container">
        <div className="cinema__wrapper">

          {dataFilms.map((card) => (
            <Link key={card.id} to={`/film/${card.id}`}>
              <div className="cinema__card">
                <img src={`${card.image}`} alt="img" />
                <p>{card.title}</p>
                <b>{card.rating}</b>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Cinema