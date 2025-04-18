import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import './Partner.css';

const Partner: React.FC = () => {
  return (
    <div className="partner-page">
      <Container>
        <div className="partner-header">
          <h1>Our Partner & Collaborators</h1>
          <p>
            We collaborate with leading organizations and institutions to advance research, 
            innovation, and education in the field of Information Systems.
          </p>
        </div>
        
        <div className="partner-content">
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <h4 className="mb-3">Platform</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">Overview</a></li>
                <li className="mb-2"><a href="#">Framer</a></li>
                <li className="mb-2"><a href="#">Extensions</a></li>
                <li className="mb-2"><a href="#">Connected</a></li>
                <li className="mb-2"><a href="#">Building</a></li>
                <li className="mb-2"><a href="#">Data</a></li>
              </ul>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h4 className="mb-3">Solutions</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">Operations</a></li>
                <li className="mb-2"><a href="#">Marketing</a></li>
                <li className="mb-2"><a href="#">Documents</a></li>
                <li className="mb-2"><a href="#">Product</a></li>
                <li className="mb-2"><a href="#">Finance</a></li>
                <li className="mb-2"><a href="#">Sales</a></li>
              </ul>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h4 className="mb-3">Learn</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">Events</a></li>
                <li className="mb-2"><a href="#">Integrations</a></li>
                <li className="mb-2"><a href="#">Learning</a></li>
                <li className="mb-2"><a href="#">Webinars</a></li>
                <li className="mb-2"><a href="#">Customer</a></li>
                <li className="mb-2"><a href="#">Webinars</a></li>
              </ul>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h4 className="mb-3">Company</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">About</a></li>
                <li className="mb-2"><a href="#">Blog</a></li>
                <li className="mb-2"><a href="#">Careers</a></li>
                <li className="mb-2"><a href="#">Services</a></li>
                <li className="mb-2"><a href="#">Newsroom</a></li>
                <li className="mb-2"><a href="#">Developers</a></li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Partner; 