import { Layout, theme } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const LayoutApp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to={`/`}>
          <div className='logo-wrapper' />
        </Link>
      </Header>
      <Content>
        <div
          style={{
            minHeight: '80vh',
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', minHeight: '10vh' }}>
        Free-to-game ©2023 Created by Kumancev
      </Footer>
    </Layout>
  )
}

export default LayoutApp
