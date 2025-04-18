import React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import './ProgramMaster.css';

const ProgramMaster: React.FC = () => {
  return (
    <div className="program-master-page">
      <Container>
        <div className="program-header">
          <h1>Master Degree</h1>
          <p>
            The Master of Science (M.Sc.) program in Computer Science is designed to provide advanced knowledge and skills in various areas of computer science, preparing students for both professional careers and further academic pursuits.
          </p>
          <div className="program-buttons">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline-primary">Details</button>
          </div>
        </div>

        <div className="program-content">
          <h2>Program Overview</h2>
          <Accordion className="program-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Program Structure</Accordion.Header>
              <Accordion.Body>
                The M.Sc. program typically takes 2 years to complete and consists of coursework, research projects, and a thesis. Students can choose from various specializations including artificial intelligence, software engineering, and data science.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Research Areas</Accordion.Header>
              <Accordion.Body>
                Our program covers diverse research areas such as machine learning, computer vision, natural language processing, cybersecurity, and distributed systems. Students work on cutting-edge projects under the guidance of experienced faculty members.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Admission Requirements</Accordion.Header>
              <Accordion.Body>
                Applicants must hold a bachelor's degree in computer science or a related field, demonstrate strong academic performance, and submit letters of recommendation. Additional requirements include a statement of purpose and relevant work experience.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Career Opportunities</Accordion.Header>
              <Accordion.Body>
                Graduates of our M.Sc. program pursue careers as software engineers, data scientists, research analysts, and technology consultants. The program provides the necessary skills for leadership positions in the technology industry.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="student-info">
          <h2>Student Information</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Stream</th>
                <th>Section</th>
                <th>Roll_No</th>
                <th>College</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023</td>
                <td>Computer Science</td>
                <td>A</td>
                <td>2023CS001</td>
                <td>MU</td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer className="footer-section">
          <Container>
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
            
            <Row className="mt-4">
              <Col>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-2">
                    <a href="#" className="text-muted me-3">Terms and Conditions</a>
                    <a href="#" className="text-muted me-3">Privacy Policy</a>
                    <a href="#" className="text-muted">Cookies</a>
                  </div>
                  <div className="social-icons mb-2">
                    <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="me-3"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <p className="text-muted mb-0">© 2024 Polymer Science and Technology Programme, Mahidol University. All Rights Reserved.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </Container>
    </div>
  );
};

export default ProgramMaster; 