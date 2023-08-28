import request from '@api/index'
import { formatDate } from '@helpers/formatDate'
import { GameItem } from '@interfaces/game'
import { Card } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const { Meta } = Card

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
				<Link key={game.id} to={`game/${game.id}`}>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img alt={game.title} src={game.thumbnail} />}
					>
						<Meta
							title={game.title}
							description={formatDate(game.release_date)}
						/>
						<p>{game.publisher}</p>
						<p>{game.genre}</p>
					</Card>
				</Link>
			))}
		</>
	)
}

export default Home
