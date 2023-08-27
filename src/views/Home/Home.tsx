import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Link to={`game/1`}>Game</Link>
		</>
	)
}

export default Home
