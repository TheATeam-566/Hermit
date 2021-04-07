import React from 'react';
import { Modal, Button, ListGroup, Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';
import './CartModal.css';

class CartModal extends React.Component {
  state = { cart: [] };

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  // This method receives the cart via props from Header.js and sets the state of CartModal.js
  // We set the state in order to manage the state of each item quantity per within CartModal.js
  // It is important to note that whenever the state of the cart array is updated in CartModal.js (for example, the quantity), this updated cart array is sent back to Header.js and then to Main.js
  componentWillReceiveProps = async (nextProps) => {
    await this.setState({ cart: nextProps.children });
  };

  onDecreaseQuantity = async (e, food) => {
    e.preventDefault();
    // Find element in the cart array by caption and if found and quantity is not equal to 0, decrease the quantity of the element in the array by 1
    this.state.cart.forEach(async (foodInCart) => {
      if (foodInCart.caption === food.caption && foodInCart.quantity > 0) {
        this.setState({ foodInCart: (foodInCart.quantity -= 1) });
        await this.props.updateCartQuantities(this.state.cart);
      }

      if (foodInCart.quantity === 0) {
        this.setState(await { cart: this.state.cart.filter((item) => item.quantity !== 0) });
        await this.props.updateCartQuantities(this.state.cart);
      }
    });
  };

  onIncreaseQuantity = async (e, food) => {
    e.preventDefault();

    // Find the element in the cart array by caption and if found and quantity is not equal to 0, increase the quantity of the element in the array by 1
    this.state.cart.forEach(async (foodInCart) => {
      if (foodInCart.caption === food.caption) {
        this.setState({ foodInCart: (foodInCart.quantity += 1) });
        await this.props.updateCartQuantities(this.state.cart);
      }
    });
  };

  // Render the modal body that will display the state of the cart(empty or items added)
  renderModalBody = () => {
    if (this.state.cart.length === 0) {
      return (
        <Modal.Body className="modal-black">
          <p style={{ textAlign: 'center' }}>🦀 Your cart is empty 🦀</p>
        </Modal.Body>
      );
    } else if (this.state.cart.length !== 0) {
      return (
        <Modal.Body className="modal-black">
          {this.state.cart.map((food) => (
            <ListGroup>
              <ListGroup.Item key={food} className="cart-items">
                <Row>
                  <Col xs="3">
                    <br />
                    <Image
                      src={`${food.image}`}
                      alt={`${food.caption}`}
                      width="150"
                      height="150"
                      rounded
                    />
                  </Col>
                  <Col xs="6">
                    <br />
                    <h2>{String(food.caption)}</h2>
                    <p className=" h4">{String(food.description)}</p>
                    <span className="h4 cart-items-price">${String(food.price)}</span>
                    <br />
                  </Col>
                  <Col>
                    <br />
                    <br />
                    <Button
                      variant="danger"
                      className="btn-round animation-on-hover"
                      onClick={(e) => this.onDecreaseQuantity(e, food)}
                    >
                      <DashCircleFill />
                    </Button>

                    <Button
                      variant="success"
                      className="btn-round animation-on-hover"
                      onClick={(e) => this.onIncreaseQuantity(e, food)}
                    >
                      <PlusCircleFill />
                    </Button>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{food.quantity}</h2>
                  </Col>
                </Row>
              </ListGroup.Item>
              <hr />
            </ListGroup>
          ))}
        </Modal.Body>
      );
    }
  };

  // Render button to proceed to orderConfirmation
  renderButtons = () => {
    if (this.state.cart.length > 0) {
      return (
        <>
          <Link to="/order">
            <Button className="btn-round animation-on-hover" to="#" onClick={this.onClose}>
              Proceed to Checkout
            </Button>
          </Link>
        </>
      );
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <>
        <Modal
          className="modal-black"
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={this.onClose}
        >
          <Modal.Header closeButton={this.onClose}>
            <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
              Your Cart
            </Modal.Title>
          </Modal.Header>
          {this.renderModalBody()}
          <Modal.Footer className="justify-content-end">{this.renderButtons()}</Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CartModal;
