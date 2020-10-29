import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mt-3">
            <h1 className="text-center">Home Page</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
