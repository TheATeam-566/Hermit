import React, { Component } from 'react';
import { ListGroup, Accordion, Card, Button, Container } from 'react-bootstrap';
import './UserOrderHistory.css';

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
      return (
        <div className="order-history-items">
          <h1>You have no orders.</h1>
        </div>
      );
    } else {
      return (
        <>
          <div className="order-history-items">
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
                                  <ListGroup.Item className="list-group-item-new">
                                    {item.quantity}x {item.caption}
                                  </ListGroup.Item>
                                );
                              })}
                              <Button variant="danger" className="btn-round animation-on-hover">
                                Refund
                              </Button>
                            </ListGroup>
                          </Card.Text>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </>
              );
            })}
            <br />
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <Container fluid className="order-history-container">
          {this.renderOrderHistory()}
        </Container>
      </>
    );
  }
}

export default UserOrderHistory;
