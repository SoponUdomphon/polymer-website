import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { articles, news, presentations } from '../data/ContentStorage';
import './News.css';

const News: React.FC = () => {
  // Get the 3 latest articles
  const latestArticles = articles.slice(0, 3);
  
  // Get the 3 latest news items
  const latestNews = news.slice(0, 3);
  
  // Get the latest presentation
  const latestPresentation = presentations[0];

  return (
    <div className="news-page">
      <Container>
        <div className="blog-header">
          <h2>Blog</h2>
          <p>Stay tuned and updated by the latest updates from our blog.</p>
          <hr className="divider" />
        </div>

        <Row className="blog-posts">
          {latestArticles.map((article) => (
            <Col lg={4} md={6} className="mb-4" key={article.id}>
              <Card className="blog-card">
                <Card.Img 
                  variant="top" 
                  src={article.images && article.images.length > 0 ? article.images[0] : "/images/default.jpg"} 
                  alt={article.title}
                />
                <div className={`category ${article.category.toLowerCase()}`}>{article.category}</div>
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <div className="post-meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.author.name}</span>
                  </div>
                  <Link to={`/content/article/${article.id}`} className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="presentation-latest-section">
          <Col lg={4}>
            <div className="presentation-section">
              <h6 className="section-title">PRESENTATION</h6>
              <Card className="presentation-card">
                <Card.Body>
                  <div className="presentation-topic">{latestPresentation.topic}</div>
                  <h2>{latestPresentation.presenter.name}</h2>
                  <p>{latestPresentation.presenter.laboratory}</p>
                  <div className="role">
                    <i className="fas fa-calendar"></i> {latestPresentation.date}
                  </div>
                  <Link to={`/content/presentation/${latestPresentation.id}`} className="more-details">
                    More Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={8}>
            <div className="latest-news">
              <div className="section-header">
                <h6>LATEST NEWS AT WRAPKIT</h6>
                <Link to="/content-storage?tab=news" className="view-all">
                  VIEW ALL <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="news-list">
                {latestNews.map((newsItem) => (
                  <div className="news-item" key={newsItem.id}>
                    <div className="news-image">
                      <img src={newsItem.images[0] || "/images/default.jpg"} alt={newsItem.title} />
                    </div>
                    <div className="news-content">
                      <Link to={`/content/news/${newsItem.id}`}>
                        <h3>{newsItem.title}</h3>
                      </Link>
                      <div className="news-meta">
                        by {newsItem.author.name} / {newsItem.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Section */}
        <footer className="footer-section">
          <Container>
            <Row>
              <Col md={3} sm={6} className="mb-4">
                <h4 className="mb-3">Platform</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="/">Home</a></li>
                  <li className="mb-2"><a href="/about">About</a></li>
                  <li className="mb-2"><a href="/program-master">Master Degree</a></li>
                  <li className="mb-2"><a href="/program-phd">Doctor Degree</a></li>
                  <li className="mb-2"><a href="/research-cluster">Research</a></li>
                  <li className="mb-2"><a href="/news">News & Events</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h4 className="mb-3">Solutions</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="/research-cluster">Research Cluster</a></li>
                  <li className="mb-2"><a href="/laboratory">Laboratory</a></li>
                  <li className="mb-2"><a href="/publications">Publications</a></li>
                  <li className="mb-2"><a href="/projects">Projects</a></li>
                  <li className="mb-2"><a href="/collaborations">Collaborations</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h4 className="mb-3">Learn</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="/resources">Resources</a></li>
                  <li className="mb-2"><a href="/events">Events</a></li>
                  <li className="mb-2"><a href="/news">News</a></li>
                  <li className="mb-2"><a href="/blog">Blog</a></li>
                  <li className="mb-2"><a href="/faq">FAQ</a></li>
                  <li className="mb-2"><a href="/contact">Contact</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h4 className="mb-3">Company</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="/vision">Vision & Mission</a></li>
                  <li className="mb-2"><a href="/staff">Our Staff</a></li>
                  <li className="mb-2"><a href="/partners">Our Partners</a></li>
                  <li className="mb-2"><a href="/careers">Careers</a></li>
                  <li className="mb-2"><a href="/privacy">Privacy Policy</a></li>
                  <li className="mb-2"><a href="/terms">Terms of Service</a></li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-2">
                    <a href="/terms" className="text-muted me-3">Terms and Conditions</a>
                    <a href="/privacy" className="text-muted me-3">Privacy Policy</a>
                    <a href="/cookies" className="text-muted">Cookies</a>
                  </div>
                  <div className="social-icons mb-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
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

export default News; 