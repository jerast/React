import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { FullLayout } from '../layout/Full.layout'
import { Navigate, useNavigate } from 'react-router-dom'

const  { Title, Text } = Typography

export const DesktopPage = () => {
  const navigate = useNavigate()

  if (!localStorage.getItem('ticket-app-session')) 
    return (
      <FullLayout>
        <Navigate to="/login" replace/>
      </FullLayout>
    )

  const agentSession = JSON.parse(localStorage.getItem('ticket-app-session'))

  const onExit = () => {
    localStorage.removeItem('ticket-app-session')
    navigate('/')
  }

  const onNextTicket = () => {}

  return (
    <FullLayout>
      <Row>
        <Col span={21}>
          <Title level={2}>{ agentSession.agent }</Title>
          <Text>You're working on desktop: </Text>
          <Text type="success" >{ agentSession.desktop }</Text>
        </Col>
        <Col>
          <Button shape="round" type="primary" danger onClick={onExit}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>You're handling ticket with code: </Text>
          <Text style={{ fontSize: 30}} type="danger">55</Text>
        </Col>
      </Row>

      <Row>
        <Col offset={19} span={5}>
          <Button shape="round" type="primary" onClick={onNextTicket}>
            <RightOutlined />
            Next Ticket
          </Button>
        </Col>
      </Row>
    </FullLayout>
  )
}