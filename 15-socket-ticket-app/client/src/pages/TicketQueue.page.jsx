import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd'
import { ClearLayout } from '../layout/Clear.layout';
import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const TicketQueuePage = () => {
  const { lastTicketsList } = useContext( SocketContext )

  return (
    <ClearLayout>
      <Typography.Title>Attending to client</Typography.Title>
      <Row>
        <Col span={12}>
          <List 
            dataSource={ lastTicketsList.slice(0,3) }
            renderItem={ currentTicket => (
              <List.Item>
                <Card 
                  bordered={false}
                  style={{ width: '300px', marginTop: '16px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.02) 0px 1px 6px -1px, rgba(0, 0, 0, 0.02) 0px 2px 4px 0px', overflowY: 'auto' }}
                  actions={[
                    <Tag color="volcano" style={{ borderRadius: '20px' }}>{ currentTicket.agent }</Tag>,
                    <Tag color="magenta" style={{ borderRadius: '20px' }}>Desktop: { currentTicket.desktop }</Tag>
                  ]}
                >
                  <Typography.Title style={{ margin: 0 }}>No. { currentTicket.number }</Typography.Title>
                </Card>
              </List.Item>
            ) }
          />
        </Col>

        <Col span={12}>
          <Divider>History</Divider>
          <List 
            dataSource={ lastTicketsList.slice(3) }
            renderItem={ pastTicket => (
              <List.Item>
                <List.Item.Meta 
                  title={`Ticket No. ${pastTicket.number}`}
                  description={
                    <>
                      <Typography.Text type="secondary" style={{ borderRadius: '20px' }}>Desktop: </Typography.Text>
                      <Tag color="magenta" style={{ borderRadius: '20px' }}>{ pastTicket.desktop }</Tag>
                      <Typography.Text type="secondary" style={{ borderRadius: '20px' }}>Agent: </Typography.Text>
                      <Tag color="volcano" style={{ borderRadius: '20px' }}>{ pastTicket.agent }</Tag>
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