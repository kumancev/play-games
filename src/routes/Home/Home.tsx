import SelectPanel from '@components/Select/SelectPanel'
import GameCard from '@components/GameCard/GameCard'
import Loader from '@components/Loader/Loader'
import { useGetSortGamesQuery } from '@services/games'
import { useAppSelector } from '@app/hooks'
import './index.css'

const Home = () => {
  const { data, error, isLoading } = useGetSortGamesQuery(
    {
      platform: useAppSelector((state) => state.filters.platform),
      genre: useAppSelector((state) => state.filters.genre),
      sort: useAppSelector((state) => state.filters.sort),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  )

  return (
    <div className='game-list'>
      <h1 className='game-list__title'>
        Discover the best <span className='text-blue'>free-to-play</span> games!
      </h1>
      <SelectPanel />
      <section className='game-list__wrapper'>
        {isLoading && <Loader />}
        {error && (
          <p className='error-load-message'>
            An Error occured while loading the games
          </p>
        )}
        {data && data.map((game) => <GameCard key={game.id} {...game} />)}
      </section>
    </div>
  )
}

export default Home
