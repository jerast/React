import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider, Content } = Layout;

export const FullLayout = ({ children }) => {
  const { token: { colorBgContainer, borderRadiusLG }} = theme.useToken()

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider 
        theme="dark"
        collapsedWidth={0}
        breakpoint="sm"
      >
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/login'>Login</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/queue'>Tickets Queue</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to="/new">New Ticket</Link>,              
            },
          ]}
        />
      </Sider>

      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: 'auto'
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  )
}