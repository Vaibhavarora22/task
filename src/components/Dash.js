import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from './Header';
import "../styles/Dash.css"

const templates = [
  { title: 'Simple Dashboard', description: 'Easily manage and prioritize daily tasks.' },
  { title: 'Team Reporting', description: 'Encourage collaboration by viewing progress across team.', business: true },
  { title: 'Time Tracking', description: 'View and report on time tracking metrics.', business: true },
  { title: 'Project Management', description: 'Deep-dive on detailed projects from a central place.', business: true },
  { title: 'Client Portal', description: 'Chat and collaborate with clients on tasks and projects.', business: true },
];

const Dash = () => {
  return (
    <div>
        <Header />
    <Container className="mt-5">
      <h2 className="text-center mb-4">Choose a Dashboard template</h2>
      <p className="text-center mb-4">Get started with a Dashboard template or create a custom Dashboard to fit your exact needs.</p>
      <Row>
        {templates.map((template, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 card-hover">
              <Card.Body>
                <Card.Title>{template.title}</Card.Title>
                <Card.Text>{template.description}</Card.Text>
                {template.business && <span className="badge bg-secondary">BUSINESS</span>}
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col md={4} className="mb-4">
          <Card className="h-100 card-hover">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div>
                <Card.Title className="text-center">Start from scratch</Card.Title>
                <div className="text-center">
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Dash;
