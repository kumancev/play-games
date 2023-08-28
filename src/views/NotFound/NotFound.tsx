import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='not-found'>
      <h1>Oops!</h1>
      <p>Sorry, but the page you’re looking for can not be found :(</p>
    </div>
  )
}

export default NotFound
