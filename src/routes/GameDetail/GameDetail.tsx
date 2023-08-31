import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '@api/index'
import { GameFull } from '@src/types/game'
import GameInfo from '@components/GameInfo/GameInfo'
import { Skeleton } from 'antd'

const GameDetail = () => {
  const params = useParams()
  const [data, setData] = useState<GameFull | null>(null)

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await request<GameFull>('GET', 'game', {
          id: params.gameId,
        })
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fecthData()
  }, [params.gameId])

  return (
    <>
      {data ? <GameInfo {...data} /> : <Skeleton style={{ padding: '2em' }} />}
    </>
  )
}

export default GameDetail
