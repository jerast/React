import { Button, Card, Col, Divider, List, Row, Tag, Typography } from 'antd'
import {  } from '@ant-design/icons'
import { ClearLayout } from '../layout/Clear.layout';

const  { Title, Text } = Typography
const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
];

export const TicketQueuePage = () => {
  return (
    <ClearLayout>
      <Title>Attending to client</Title>
      <Row>
        <Col span={12}>
          <List 
            dataSource={ data.slice(0,5) }
            renderItem={ item => (
              <List.Item>
                <Card 
                  bordered={false}
                  style={{ width: '300px', marginTop: '16px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.02) 0px 1px 6px -1px, rgba(0, 0, 0, 0.02) 0px 2px 4px 0px', overflowY: 'auto' }}
                  actions={[
                    <Tag color="volcano" style={{ borderRadius: '20px' }}>{ item.agente }</Tag>,
                    <Tag color="magenta" style={{ borderRadius: '20px' }}>Escritorio: { item.escritorio }</Tag>
                  ]}
                >
                  <Title style={{ margin: 0 }}>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            ) }
          />
        </Col>

        <Col span={12}>
          <Divider>History</Divider>
          <List 
            dataSource={ data.slice(3) }
            renderItem={ item => (
              <List.Item>
                <List.Item.Meta 
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary" style={{ borderRadius: '20px' }}>Desktop: </Text>
                      <Tag color="magenta" style={{ borderRadius: '20px' }}>{ item.escritorio }</Tag>
                      <Text type="secondary" style={{ borderRadius: '20px' }}>Agent: </Text>
                      <Tag color="volcano" style={{ borderRadius: '20px' }}>{ item.agente }</Tag>
                    </>
                  }
                />
              </List.Item>
            ) }
          />
        </Col>
      </Row>
    </ClearLayout>
  )
}