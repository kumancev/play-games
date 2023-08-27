import request from '@api/index'
import { GameItem } from '@interfaces/game'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
			{data?.map((game) => (
				<div key={game.id}>
					<Link to={`game/${game.id}`}>
						<img src={game.thumbnail} alt='game preview' />
					</Link>
					<h4>{game.title}</h4>
					<p>{game.release_date}</p>
					<p>{game.publisher}</p>
					<p>{game.genre}</p>
				</div>
			))}
		</>
	)
}

export default Home
