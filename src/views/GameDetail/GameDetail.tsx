import { Link, useParams } from 'react-router-dom'

const GameDetail = () => {
  const params = useParams()

  return (
    <>
      <div>GameDetail</div>
      <p>Game ID {params.gameId}</p>
      <Link to={`/`}>Back</Link>
    </>
  )
}

export default GameDetail
