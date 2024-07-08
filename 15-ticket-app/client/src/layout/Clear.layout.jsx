import { Layout, theme } from 'antd';

export const ClearLayout = ({ children }) => {
  const { token: { colorBgContainer, borderRadiusLG }} = theme.useToken()

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Content
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
      </Layout.Content>
    </Layout>
  )
}