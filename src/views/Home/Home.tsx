import { useEffect, useState } from 'react'
import request from '@api/index'
import SelectPanel from '@components/Select/SelectPanel'
import GameCard from '@components/GameCard/GameCard'
import { GameItem } from '@interfaces/game'
import './index.css'

const Home = () => {
  const [data, setData] = useState<Array<GameItem> | null>(null)

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await request<Array<GameItem>>(
          'GET',
          'category=shooter'
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
      <SelectPanel />
      <section className='game-list-wrapper'>
        {data?.map((game) => <GameCard key={game.id} {...game} />)}
      </section>
    </>
  )
}

export default Home
