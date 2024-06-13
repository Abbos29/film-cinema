import React, { useEffect, useState } from 'react'
import Product from '../Layout/Product/Product'
import { Helmet } from 'react-helmet-async'

import dataFilms from '../db/data'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

  const { id } = useParams();

  const [filmTitle, setFilmTitle] = useState('');
  const [filmDesc, setFilmDesc] = useState('');

  useEffect(() => {
    const film = dataFilms.find(film => film.id === parseInt(id));
    if (film) {
      setFilmTitle(film.title);
      setFilmDesc(film.description)
    }

  }, [id]);


  return (
    <>
      <Helmet>
        <title>FilmCinema - {filmTitle}</title>
        <meta name="description" content={filmDesc} />
      </Helmet>

      <Product />
    </>
  )
}

export default ProductPage