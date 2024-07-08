import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { FullLayout } from '../layout/Full.layout'

const { Title, Text } = Typography

export const LoginPage = () => {
  const navigate = useNavigate()
  
  if (localStorage.getItem('ticket-app-session')) 
    return (
      <FullLayout>
        <Navigate to="/desktop" />
      </FullLayout>
    )

  const onFinish = (values) => {
    localStorage.setItem('ticket-app-session', JSON.stringify(values))
    navigate('/desktop')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <FullLayout>
      <Title>Log In</Title>
      <Text>Input your name and dektop number</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent Name"
          name="agent"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop Number"
          name="desktop"
          rules={[
            {
              required: true,
              message: 'Please input the Desktop number!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Login
          </Button>
        </Form.Item>
      </Form>
    </FullLayout>
  )
}