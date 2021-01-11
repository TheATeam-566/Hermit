import React from 'react';
import { Modal, Button, ListGroup, Image, Container, Col, Row } from 'react-bootstrap';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';

class CartModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  renderModalBody = () => {
    if (this.props.children.length === 0) {
      return (
        <Modal.Body>
          <p style={{ textAlign: 'center' }}>🦀 Your cart is empty 🦀</p>
        </Modal.Body>
      );
    } else if (this.props.children) {
      return (
        <Modal.Body>
          {this.props.children.map((food) => (
            <ListGroup>
              <ListGroup.Item key={food}>
                <Container fluid>
                  <Row>
                    <Col>
                      <Image
                        src={`${food.image}`}
                        alt={`${food.caption}`}
                        width="150"
                        height="150"
                        rounded
                      />
                    </Col>
                    <Col xs={6}>
                      <br />
                      <br />
                      {String(food.caption)}
                      <br />
                      {'A delicious item 🦆'}
                      <br />${String(food.price)}
                      <br />
                    </Col>
                    <Col>
                      <br />
                      <br />
                      <Button variant="danger">
                        <DashCircleFill />
                      </Button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant="success">
                        <PlusCircleFill />
                      </Button>
                      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{food.quantity}</h2>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <hr />
            </ListGroup>
          ))}
        </Modal.Body>
      );
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
          </Modal.Header>
          {this.renderModalBody()}
          <Modal.Footer>
            <Button onClick={this.onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CartModal;
