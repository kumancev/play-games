import { formatDate } from '@helpers/formatDate'
import { GameFull } from '@src/types/game'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CarouselEl from '@components/Carousel/Carousel'
import './index.css'

const GameInfo = (gameInfo: GameFull) => {
  const {
    title,
    thumbnail,
    description,
    genre,
    publisher,
    developer,
    release_date,
    minimum_system_requirements,
    screenshots,
  } = gameInfo
  const [showFullDescription, setFullDescription] = useState(false)

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription)
  }

  const desc = showFullDescription ? description : description.slice(0, 120)

  return (
    <section className='game-info'>
      <div className='game-info__header'>
        <img
          className='game-info__header-bg'
          src={thumbnail}
          alt='game-preview'
        />
        <h2 className='game-info__header-title'>{title}</h2>
      </div>
      <div className='game-info__main'>
        <Link className='game-info__return-link' to={`/`}>
          &#x25c0; Games
        </Link>
        <p className='game-info__title'>About</p>
        <p className='game-info__about'>
          {desc}
          <span
            className='read-more'
            onClick={showFullDescriptionHandler}
            aria-hidden='true'
          >
            {showFullDescription ? ' show less' : '...read more'}
          </span>
        </p>
        <div className='game-info__meta'>
          <div className='meta-block'>
            <span>Genre</span>
            <p>{genre}</p>
          </div>
          <div className='meta-block'>
            <span>Publisher</span>
            <p>{publisher}</p>
          </div>
          <div className='meta-block'>
            <span>Developer</span>
            <p>{developer}</p>
          </div>
          <div className='meta-block'>
            <span>Release date</span>
            <p>{formatDate(release_date)}</p>
          </div>
        </div>
        <CarouselEl images={screenshots} />
        <div className='game-info__system'>
          <p className='game-info__title'>System requirements</p>
          <ul className='game-info__system-info'>
            <li>{minimum_system_requirements.os}</li>
            <li>{minimum_system_requirements.processor}</li>
            <li>{minimum_system_requirements.memory}</li>
            <li>{minimum_system_requirements.graphics}</li>
            <li>{minimum_system_requirements.storage}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default GameInfo
