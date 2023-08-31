import { useParams } from 'react-router-dom'
import GameInfo from '@components/GameInfo/GameInfo'
import { Skeleton } from 'antd'
import { useGetGameByIdQuery } from '@services/games'

const GameDetail = () => {
  const params = useParams()
  const { data, error, isLoading } = useGetGameByIdQuery(String(params.gameId))
  return (
    <>
      {isLoading && <Skeleton style={{ padding: '2em' }} />}
      {error && (
        <p className='error-load-message'>
          An Error occured while loading the game
        </p>
      )}
      {data && <GameInfo {...data} />}
    </>
  )
}

export default GameDetail
