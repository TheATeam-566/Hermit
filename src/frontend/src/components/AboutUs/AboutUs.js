import React, { Component } from 'react';
import { Container, Col, Row, Button, Carousel } from 'react-bootstrap';
import { Linkedin, Github } from 'react-bootstrap-icons';
import './AboutUs.css';

class AboutUs extends Component {
  renderCarousel = () => {
    return (
      <>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">The A Team</h2>
              <h4 className="description">
                The A Team is a software service provider who specializes in keeping our customers
                happy by delivering high quality software for all your needs.
              </h4>
              <h4 className="description">
                Hermit was built to aid The Cheesecake Factory in realizing their full potential as
                one of the best restaurants in the business. Hermit is the easy way to get the food
                you love delivered right to your doorstep.
              </h4>
            </Col>
          </Row>
          <Row>
            <Carousel fade className="carousel-team">
              {/* Plamens profile */}
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col md="4">
                      <h1 className="title text-left">Plamen Velkov</h1>
                    </Col>
                    <Col md="4">
                      <img
                        alt="..."
                        className="d-block profile-pic"
                        src={require('../../assets/img/plamen-professional.jpeg').default}
                      />
                    </Col>
                    <Col md="4">
                      <div className="wrapper">
                        <div className="category">
                          <strong>Position:</strong> Developer <br />
                          <strong>Experience:</strong> 2 years
                        </div>
                        <div className="description">
                          <p className="mb-0">
                            Plamen is a developer who has worked on many projects that give him the
                            necessary skills to contribute to the A Team. Plamen's expertise lay in
                            Java, JavaScript and many web frameworks such as React and Node.js. He
                            is often looked to for solutions on applying non-standard solutions.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="footer">
                          <Button
                            className="btn-icon btn-round mr-1"
                            variant="linkedin"
                            href="https://www.linkedin.com/in/plamen-velkov/"
                          >
                            <Linkedin size={40} color="lightgray" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            variant="github"
                            href="https://github.com/pyvelkov"
                          >
                            <Github size={40} color="royalblue" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              {/* Chris profile */}
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col md="4">
                      <h1 className="title text-left">Chris Pinkney</h1>
                    </Col>
                    <Col md="4">
                      <img
                        alt="..."
                        className="d-block profile-pic"
                        src={require('../../assets/img/chris-professional.jpeg').default}
                      />
                    </Col>
                    <Col md="4">
                      <div className="wrapper">
                        <div className="category">
                          <strong>Position:</strong> Developer <br />
                          <strong>Experience:</strong> 2 years
                        </div>
                        <div className="description">
                          <p className="mb-0">
                            Chris is a developer who has worked on many projects that give him the
                            necessary skills to contribute to the A Team. Chris' expertise lay in
                            Java, JavaScript and many web frameworks such as React and Node.js. He
                            is often looked to for solutions on applying non-standard solutions.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="footer">
                          <Button
                            className="btn-icon btn-round mr-1"
                            variant="linkedin"
                            href="https://www.linkedin.com/in/chrispinkney/"
                          >
                            <Linkedin size={40} color="lightgray" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            variant="github"
                            href="https://github.com/chrispinkney"
                          >
                            <Github size={40} color="royalblue" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              {/* Nilans profile */}
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col md="4">
                      <h1 className="title text-left">Nilan Patel</h1>
                    </Col>
                    <Col md="4">
                      <img
                        alt="..."
                        className="d-block profile-pic"
                        src={require('../../assets/img/nilan-professional.jpeg').default}
                      />
                    </Col>
                    <Col md="4">
                      <div className="wrapper">
                        <div className="category">
                          <strong>Position:</strong> Developer <br />
                          <strong>Experience:</strong> 2 years
                        </div>
                        <div className="description">
                          <p className="mb-0">
                            Nilan is a developer who has worked on many projects that give him the
                            necessary skills to contribute to the A Team. Nilan's expertise lay in
                            Java, JavaScript and many web frameworks such as React and Node.js. He
                            is often looked to for solutions on applying non-standard solutions.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="footer">
                          <Button
                            className="btn-icon btn-round mr-1"
                            variant="linkedin"
                            href="https://www.linkedin.com/in/nilan-patel-0b320991/"
                          >
                            <Linkedin size={40} color="lightgray" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            variant="github"
                            href="https://github.com/nilan01"
                          >
                            <Github size={40} color="royalblue" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              {/* Andres profile */}
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col md="4">
                      <h1 className="title text-left">Andre Gopichan</h1>
                    </Col>
                    <Col md="4">
                      <img
                        alt="..."
                        className="d-block profile-pic"
                        src={require('../../assets/img/andre-professional.jpeg').default}
                      />
                    </Col>
                    <Col md="4">
                      <div className="wrapper">
                        <div className="category">
                          <strong>Position:</strong> Developer <br />
                          <strong>Experience:</strong> 2 years
                        </div>
                        <div className="description">
                          <p className="mb-0">
                            Andre is a developer who has worked on many projects that give him the
                            necessary skills to contribute to the A Team. Andre's expertise lay in
                            Java, JavaScript and many web frameworks such as React and Node.js. He
                            is often looked to for solutions on applying non-standard solutions.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className="footer">
                          <Button
                            className="btn-icon btn-round mr-1"
                            variant="linkedin"
                            href="https://www.linkedin.com/in/andre-gopichan-bb7412191/"
                          >
                            <Linkedin size={40} color="lightgray" />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            variant="github"
                            href="https://github.com/andregopichan"
                          >
                            <Github size={40} color="royalblue" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
        <br />
        <br />
      </>
    );
  };

  render() {
    return <>{this.renderCarousel()}</>;
  }
}

export default AboutUs;
