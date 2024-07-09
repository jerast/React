import { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'

import { FullLayout } from '../layout/Full.layout'
import { getLocalAgentUser, removeLocalAgentUser } from '../helpers/agentUser'
import { SocketContext } from '../context/SocketContext'

const  { Title, Text } = Typography

export const DesktopPage = () => {
  const navigate = useNavigate()
  const [agentUser] = useState(getLocalAgentUser())
  const { currentTicket, onNextTicket } = useContext( SocketContext )

  if (!agentUser) {
    return <Navigate to="/login"/>
  }  

  const onExit = () => {
    removeLocalAgentUser()
    navigate('/login')
  }

  return (
    <FullLayout>
      <Row>
        <Col span={21}>
          <Title level={2}>{ agentUser.agent }</Title>
          <Text>You're working on desktop: </Text>
          <Text type="success" >{ agentUser.desktop }</Text>
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
        <Col offset={19} span={5}>
          <Button shape="round" type="primary" onClick={() => onNextTicket(agentUser)}>
            <RightOutlined />
            { currentTicket ? 'Take Next' : 'Take a ' } Ticket
          </Button>
        </Col>
      </Row>

      {
        currentTicket && (
          <Row>
            <Col>
              <Text>You're handling ticket with code: </Text>
              <Text style={{ fontSize: 30}} type="danger">{ currentTicket.number }</Text>
            </Col>
          </Row>
        )
      }
    </FullLayout>
  )
}