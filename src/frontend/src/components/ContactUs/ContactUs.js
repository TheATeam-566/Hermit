import React, { Component } from 'react';
import { Button, Container, Col, Row, FormGroup, Form, Card, Badge } from 'react-bootstrap';
import Emailjs from 'emailjs-com';

// functional component for making use and comfiguring Email.js
function sendEmail(e) {
  e.preventDefault();

  Emailjs.sendForm('service_i948rgf', 'ateam_id', e.target, 'user_dfDmflXKpjaW9i6Q0yW3D').then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
  e.target.reset();
}

class ContactUs extends Component {
  // Simple submit form rendering and functionality that is hooked up with Email.js OnSubmit.
  renderContactUs = () => {
    return (
      <>
        <div className="wrapper">
          <div className="main">
            <Container fluid>
              <Row className="infos mb-5">
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-primary">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('../../assets/img/feature-blob/primary.png').default}
                      />
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <h4 className="info-title">Address</h4>
                    <p className="description">1750 Finch Ave E, North York, ON</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-info">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('../../assets/img/feature-blob/info.png').default}
                      />
                      <i className="tim-icons icon-email-85" />
                    </div>
                    <h4 className="info-title">Email</h4>
                    <p className="description">theateam.566@gmail.com</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-warning">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('../../assets/img/feature-blob/warning.png').default}
                      />
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <h4 className="info-title">Phone Number</h4>
                    <p className="description">+1(416) 491 5050</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-success">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require('../../assets/img/feature-blob/success.png').default}
                      />
                      <i className="tim-icons icon-single-02" />
                    </div>
                    <h4 className="info-title">Contact</h4>
                    <p className="description">A Team</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 mb-4 pt-5">
                <Col className="ml-auto mr-auto text-center mt-5" md="8">
                  <Badge variant="info">Leave a message</Badge>
                  <h1 className="title">
                    Tell us more about <b>yourself</b>
                  </h1>
                  <h4 className="desc">
                    Whether you have questions or you would just like to say hello, contact us.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="mx-auto" md="10">
                  <Card>
                    <Card.Body>
                      <Form onSubmit={sendEmail}>
                        <FormGroup>
                          <Form.Label for="exampleEmail1">Email address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            id="exampleEmai1l"
                            placeholder="name@example.com"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Form.Label for="exampleSelect1">Name</Form.Label>
                          <Form.Control type="text" name="name" id="name" />
                        </FormGroup>
                        <FormGroup>
                          <Form.Label for="exampleSelectMulti1">Subject</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            id="exampleSelectMulti1"
                            multiple
                          />
                        </FormGroup>
                        <FormGroup>
                          <Form.Label for="exampleText">Message</Form.Label>
                          <Form.Control as="textarea" rows={3} name="message" />
                        </FormGroup>
                        <Button className="btn-round animation-on-hover" type="submit">
                          Send Email
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                  <br />
                  <br />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  };

  render() {
    return <>{this.renderContactUs()}</>;
  }
}

export default ContactUs;
