// import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../Layout/Hero/Hero'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>FilmCinema - Home</title>
                {/* <meta name="description" content="This is the about page" /> */}
            </Helmet>

            <Hero />
        </>
    )
}

export default HomePage