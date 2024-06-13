// import React from 'react'

import { Helmet } from "react-helmet-async"
import Cinema from "../Layout/Cinema/Cinema"

const CinemaPage = () => {
    return (
        <>
            <Helmet>
                <title>FilmCinema - Catalog</title>
                {/* <meta name="description" content="This is the about page" /> */}
            </Helmet>
            <Cinema />
        </>
    )
}

export default CinemaPage