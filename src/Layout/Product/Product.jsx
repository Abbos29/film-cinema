import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.scss'

import dataFilms from '../../db/data'

const Product = () => {

    const { id } = useParams()

    const [dataMain, setDataMain] = useState([])

    const [isModal, isOpenModal] = useState(false)

    const [videoSrc, setVideoSrc] = useState('');

    const toggleModal = () => {
        isOpenModal(prev => !prev)
    }

    const toggleOverModal = (e) => {
        if (e.target.className == 'product__modal modal-open') {
            toggleModal()
        }
        // console.log(e.target.className);
    }

    useEffect(() => {
        const film = dataFilms.find(film => film.id === parseInt(id))

        if (film) {
            setDataMain([film])
        }
    }, [id])

    useEffect(() => {
        if (!isModal) {
            setVideoSrc(''); // Останавливаем видео при закрытии модального окна
        } else {
            const film = dataMain[0];
            if (film) {
                setVideoSrc(film.videoSrc); // Восстанавливаем src при открытии модального окна
            }
        }
    }, [isModal, dataMain]);

    console.log(dataMain);


    return (
        <section className={`product product-${id}`}>
            <div className="container">


                {dataMain.map((card) => (
                    <>
                        <div key={card.id} className='product__wrapper'>

                            <img className="product__img" src={card.image} alt="" />

                            <div className="product__content">
                                <h2>{card.title}</h2>
                                <h4>{card.releaseDate}</h4>

                                <div className="product__inner">
                                    <h3>{card.rating}</h3>
                                    <h5><span>{card.duration}</span></h5>
                                    <h6>Budget: <span>{card.budget}</span></h6>
                                </div>

                                <p>{card.description}</p>
                                <button onClick={toggleModal} className='btn-main'>Watch trailer</button>
                            </div>

                        </div>

                        <div onClick={toggleOverModal} className={`product__modal ${isModal ? 'modal-open' : ''}`}>
                            <iframe width="560" height="315" src={`${videoSrc}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </>

                ))}


            </div>
        </section>
    )
}

export default Product