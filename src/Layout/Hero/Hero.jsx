// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = () => {



  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__box">
              <h2 className='btn-solid'>
                <Link to={'/cinema'}>cinema</Link>
              </h2>
              <div className="hero-img-1">
                <img src="/hero-1.webp" alt="img" />

              </div>
            </div>

            <div className="hero__or">
              <p>or</p>
            </div>

            <div className="hero__box">
              <h2 className='btn-solid'>
                <Link to={'/exhibition'}>
                  EXHIBITION
                </Link>
              </h2>
              <div className="hero-img-2">
                <img src="/hero-2.webp" alt="img" />

              </div>
            </div>
          </div>

          <div className="hero__inner">
            <p>Select a side and start <br /> exploring</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero