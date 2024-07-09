import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { ClearLayout } from '../layout/Clear.layout'
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

const  { Title, Text } = Typography

export const TicketGenPage = () => {
  const { lastTicket, onNewTicket } = useContext( SocketContext )

  return (
    <ClearLayout>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={3}>Press  button to get a new ticket</Title>
          <Button 
            type="primary" 
            shape="round" 
            icon={ <DownloadOutlined /> }
            onClick={onNewTicket}
          >
            New Ticket
          </Button>
        </Col>
      </Row>

      {
        lastTicket && (
          <Row style={{ margin: 100}}>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Text>
                Your number
              </Text>
              <br />
              <Text type="success" style={{ fontSize: 55 }}>
                { lastTicket.number }
              </Text>
            </Col>
          </Row>
        )
      }

    </ClearLayout>
  )
}