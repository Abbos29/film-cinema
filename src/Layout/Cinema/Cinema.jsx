// import React from 'react'
import './Cinema.scss'

const Cinema = () => {
  return (
    <section className="cinema">
        <div className="container">
            <div className="cinema__wrapper">
              <div className="cinema__card">
                <img src="/public/cinema-1.webp" alt="img" />
                <p>Echoes of Eternity's Silent Symphony</p>
              </div>

              <div className="cinema__card">
                <img src="/public/cinema-2.webp" alt="img" />
                <p>Whispers of Time's Forgotten Tales</p>
              </div>

              <div className="cinema__card">
                <img src="/public/cinema-3.webp" alt="img" />
                <p>Shadows of Dawn's First Light</p>
              </div>

              <div className="cinema__card">
                <img src="/public/cinema-4.webp" alt="img" />
                <p>Ephemeral Dreams of Distant Stars</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Cinema