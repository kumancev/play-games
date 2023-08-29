// import { Layout, theme } from 'antd'
// import { Link, Outlet } from 'react-router-dom'

// const { Header, Content, Footer } = Layout

// type LayoutAppProps = {
//   children: React.ReactNode
// }

// const LayoutApp = ({ children }: LayoutAppProps) => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken()

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Header
//         style={{
//           position: 'sticky',
//           top: 0,
//           zIndex: 1,
//           width: '100%',
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Link to={`/`}>
//           <div className='logo-wrapper' />
//         </Link>
//       </Header>
//       <Content className='site-layout'>
//         <div
//           style={{
//             padding: '12px 24px',
//             minHeight: '80vh',
//             background: colorBgContainer,
//           }}
//         >
//           <h1 className='text-title'>
//             Discover the best <span className='text-blue'>free-to-play</span>{' '}
//             games!
//           </h1>
//           {children}
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center', minHeight: '10vh' }}>
//         Free-to-game ©2023 Created by Kumancev
//       </Footer>
//     </Layout>
//   )
// }

// export default LayoutApp

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
      <Content className='site-layout'>
        <div
          style={{
            padding: '12px 24px',
            minHeight: '80vh',
            background: colorBgContainer,
          }}
        >
          <h1 className='text-title'>
            Discover the best <span className='text-blue'>free-to-play</span>{' '}
            games!
          </h1>
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
