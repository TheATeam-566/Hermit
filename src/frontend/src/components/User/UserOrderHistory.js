import React, { Component } from 'react';
import { ListGroup, Accordion, Card, Button } from 'react-bootstrap';

class UserOrderHistory extends Component {
  state = {
    userInfo: this.props.userInfo,
    orderHistory: [],
  };

  componentDidMount = async () => {
    await this.fetchOrderHistory();
  };

  fetchOrderHistory = async () => {
    const response = await fetch(`/user/orders/${this.state.userInfo.id}`);
    const orderHistory = await response.json();
    this.setState({ orderHistory: orderHistory });
  };

  // Renders the buttons on the form
  renderOrderHistory = () => {
    if (this.state.orderHistory.length === 0) {
      return <h1>You have no orders.</h1>;
    } else {
      return (
        <>
          {this.state.orderHistory.map((orders) => {
            return (
              <>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="0"
                        style={{ textAlign: 'center' }}
                      >
                        Order Date: {String(new Date(orders.OrderInfo.orderTime._seconds * 1000))}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Card.Header style={{ textAlign: 'left' }}>
                          Payment Method: 💳 {orders.OrderInfo.orderSource} <br />
                        </Card.Header>
                        <Card.Header style={{ textAlign: 'left' }}>
                          Total: ${orders.Totals.grandTotal} <br />
                        </Card.Header>
                        <Card.Text>
                          <ListGroup variant="flush">
                            <Card.Header style={{ textAlign: 'left' }}>Order:</Card.Header>
                            {orders.Items.map((item) => {
                              return (
                                <ListGroup.Item>
                                  {item.quantity}x {item.caption}
                                </ListGroup.Item>
                              );
                            })}
                            <Button variant="danger">Refund</Button>
                          </ListGroup>
                        </Card.Text>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </>
            );
          })}
        </>
      );
    }
  };

  render() {
    return <>{this.renderOrderHistory()}</>;
  }
}

export default UserOrderHistory;
