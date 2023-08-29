import request from '@api/index'
import GameCard from '@components/GameCard'
import { GameItem } from '@interfaces/game'
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState<Array<GameItem> | null>(null)

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await request<Array<GameItem>>(
          'GET',
          'games?category=shooter'
        )
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fecthData()
  }, [])

  return (
    <>
      <div>Home</div>
      {data?.map((game) => <GameCard key={game.id} {...game} />)}
    </>
  )
}

export default Home
