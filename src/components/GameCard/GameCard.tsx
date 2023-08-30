import { formatDate } from '@helpers/formatDate'
import { GameItem } from '@src/types/game'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card

const GameCard = (game: GameItem) => {
  const { id, title, thumbnail, publisher, genre, release_date } = game

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={thumbnail} />}
    >
      <Link to={`game/${id}`}>
        <Meta title={title} description={formatDate(release_date)} />
        <p>{publisher}</p>
        <p>{genre}</p>
      </Link>
    </Card>
  )
}

export default GameCard
