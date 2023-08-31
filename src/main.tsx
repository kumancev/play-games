import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from '@routes/Home/Home'
import ErrorPage from '@routes/ErrorPage/ErrorPage'
import GameDetail from '@routes/GameDetail/GameDetail'
import { store } from '@app/store'
import { Provider } from 'react-redux'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'game/:gameId',
        element: <GameDetail />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
