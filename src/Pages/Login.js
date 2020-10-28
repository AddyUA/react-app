import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import Logo from "../assets/demo_agency-dark.png";

export default class Login extends Component {
  render() {
    return (
      <Container fluid style={{ height: "100vh" }}>
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col lg={5}>
            <Card className="main-card mx-auto text-center">
              <Card.Body className="p-md-5">
                <Card.Img
                  variant="top"
                  src={Logo}
                  alt="Logo"
                  className="mb-4 text-center p-2"
                  style={{ background: "#DFD0D0" }}
                />
                <p className="mb-1" style={{ fontSize: "13px" }}>
                  Please enter your email and password to login
                </p>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-1">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      Your email and password are case-sensitive.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className="mb-0">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="d-flex justify-content-end mb-1">
                    <a className="small" href="/password_reset/">
                      Forgot Password?
                    </a>
                  </div>
                  {/* <Button variant="primary" type="submit" value="Submit" className="w-100"> */}
                  <Button variant="primary" href="/home" className="w-100">
                    Login
                  </Button>
                </Form>
                <div className="text-muted small m-1">Or log in with</div>
                <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-outline-light mr-1"
                    href="https://smartmatchapp.com/social/login/google-oauth2/?next=/go/demo/"
                  >
                    <span style={{ color: "#4285f4", fontWeight: 900 }}>G</span>
                    <span style={{ color: "#ea4335" }}>o</span>
                    <span style={{ color: "#fbbc05" }}>o</span>
                    <span style={{ color: "#4285f4" }}>g</span>
                    <span style={{ color: "#34a853" }}>l</span>
                    <span style={{ color: "#ea4335" }}>e</span>
                  </a>
                  <a
                    className="btn btn-outline-light"
                    style={{ color: "#1778f2", fontWeight: 800 }}
                    href="https://smartmatchapp.com/social/login/facebook/?next=/go/demo/"
                  >
                    Facebook
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
