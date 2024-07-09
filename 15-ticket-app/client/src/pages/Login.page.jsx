import { Navigate, useNavigate } from 'react-router-dom'
import { 
  Typography,
  Button, 
  Divider, 
  Form, 
  Input, 
  InputNumber, 
} from 'antd'
import { SaveOutlined } from '@ant-design/icons'

import { FullLayout } from '../layout/Full.layout'
import { 
  getLocalAgentUser, 
  removeLocalAgentUser, 
  setLocalAgentUser 
} from '../helpers/agentUser'

export const LoginPage = () => {
  const navigate = useNavigate()
  
  if (getLocalAgentUser()) {
    return <Navigate to="/desktop"/>
  }  

  const onFinish = (values) => {
    setLocalAgentUser(values)
    navigate('/desktop')
  }

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
    removeLocalAgentUser()
  }

  return (
    <FullLayout>
      <Typography.Title>Log In</Typography.Title>
      <Typography.Text>Input your name and dektop number</Typography.Text>
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