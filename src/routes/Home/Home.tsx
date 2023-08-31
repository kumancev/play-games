import { useEffect, useState } from 'react'
import request from '@api/index'
import SelectPanel from '@components/Select/SelectPanel'
import GameCard from '@components/GameCard/GameCard'
import { GameItem } from '@src/types/game'
import './index.css'

const Home = () => {
  const [data, setData] = useState<Array<GameItem> | null>(null)

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await request<Array<GameItem>>('GET', 'games', {
          category: 'shooter',
        })
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fecthData()
  }, [])

  return (
    <div className='game-list'>
      <h1 className='game-list__title'>
        Discover the best <span className='text-blue'>free-to-play</span> games!
      </h1>
      <SelectPanel />
      <section className='game-list__wrapper'>
        {data ? (
          data.map((game) => <GameCard key={game.id} {...game} />)
        ) : (
          <p>Loading ...</p>
        )}
      </section>
    </div>
  )
}

export default Home
