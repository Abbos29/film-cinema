import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>FilmCinema - About</title>
        {/* <meta name="description" content="This is the about page" /> */}
      </Helmet>
      <div>AboutPage</div>
      <Link to={'/'}> to home</Link>
    </>


  )
}

export default AboutPage