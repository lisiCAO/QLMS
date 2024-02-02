import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  { title: "Real-Time Interaction", description: "Our platform facilitates real-time interaction...", icon: "path/to/icon" },
  { title: "Financial Processing Capabilities", description: "QLMS is equipped with robust financial processing capabilities...", icon: "path/to/icon" },
  // Add more features as needed
];

const FeaturesSection = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Why Choose QLMS?</h2>
    <Row>
      {features.map((feature, index) => (
        <Col md={4} key={index}>
          <Card className="mb-4">
            <Card.Img variant="top" src={feature.icon} />
            <Card.Body>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default FeaturesSection;
