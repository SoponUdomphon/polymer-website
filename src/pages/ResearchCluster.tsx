import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResearchCluster.css';

const ResearchCluster: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const partnersRef = useRef<HTMLHeadingElement>(null);
  const publicationsRef = useRef<HTMLHeadingElement>(null);
  const patentsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const initCarousels = async () => {
      try {
        // Dynamically import Bootstrap
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        
        // Initialize carousels after Bootstrap is loaded
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carouselEl => {
          // @ts-ignore
          new window.bootstrap.Carousel(carouselEl, {
            interval: 5000,
            touch: true
          });
        });
      } catch (error) {
        console.error('Error initializing carousels:', error);
      }
    };

    initCarousels();

    // Cleanup function
    return () => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach(carouselEl => {
        try {
          // @ts-ignore
          const carousel = window.bootstrap.Carousel.getInstance(carouselEl);
          if (carousel) {
            carousel.dispose();
          }
        } catch (error) {
          console.error('Error disposing carousel:', error);
        }
      });
    };
  }, []);

  useEffect(() => {
    const animateValue = (
      element: HTMLElement,
      start: number,
      end: number,
      duration: number
    ) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.innerHTML = `${current}+`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            let endValue = 50;
            
            switch (element.id) {
              case 'projects-count':
                endValue = 50;
                break;
              case 'partners-count':
                endValue = 30;
                break;
              case 'publications-count':
                endValue = 200;
                break;
              case 'patents-count':
                endValue = 15;
                break;
            }
            
            animateValue(element, 0, endValue, 2000);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all number elements
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (partnersRef.current) observer.observe(partnersRef.current);
    if (publicationsRef.current) observer.observe(publicationsRef.current);
    if (patentsRef.current) observer.observe(patentsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="research-cluster-page">
      <Container>
        <div className="research-header">
          <h1>Research Clusters</h1>
          <p>
            Our research clusters focus on cutting-edge technologies and innovations
            that drive the future of computer science and engineering.
          </p>
        </div>

        <Row className="research-cards g-4">
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + '/sorces/Research Cluster/nanotech-logo.jpg'}
                alt="Nanotechnology"
              />
              <Card.Body>
                <Card.Title>Nanotechnology</Card.Title>
                <Card.Text>
                  Advancing materials science through nanoscale research and applications. Our team is dedicated to exploring the potential of nanotechnology in various fields, including medicine, electronics, and energy. By leveraging the unique properties of nanomaterials, we aim to develop innovative solutions that address global challenges. Our research focuses on the synthesis, characterization, and application of nanostructures, with an emphasis on sustainability and real-world impact. Join us as we push the boundaries of what is possible at the nanoscale.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + '/sorces/Research Cluster/rubber-logo.jpg'}
                alt="Natural Rubber"
              />
              <Card.Body>
                <Card.Title>Natural Rubber</Card.Title>
                <Card.Text>
                Advancing materials science through nanoscale research and applications. Our team is dedicated to exploring the potential of nanotechnology in various fields, including medicine, electronics, and energy. By leveraging the unique properties of nanomaterials, we aim to develop innovative solutions that address global challenges. Our research focuses on the synthesis, characterization, and application of nanostructures, with an emphasis on sustainability and real-world impact. Join us as we push the boundaries of what is possible at the nanoscale.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + '/sorces/Research Cluster/advanced-logo.jpg'}
                alt="Advanced Composite"
              />
              <Card.Body>
                <Card.Title>Advanced Composite</Card.Title>
                <Card.Text>
                Advancing materials science through nanoscale research and applications. Our team is dedicated to exploring the potential of nanotechnology in various fields, including medicine, electronics, and energy. By leveraging the unique properties of nanomaterials, we aim to develop innovative solutions that address global challenges. Our research focuses on the synthesis, characterization, and application of nanostructures, with an emphasis on sustainability and real-world impact. Join us as we push the boundaries of what is possible at the nanoscale.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="research-card">
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + '/sorces/Research Cluster/industry-logo.jpg'}
                alt="Applied Industry"
              />
              <Card.Body>
                <Card.Title>Applied Industry</Card.Title>
                <Card.Text>
                Advancing materials science through nanoscale research and applications. Our team is dedicated to exploring the potential of nanotechnology in various fields, including medicine, electronics, and energy. By leveraging the unique properties of nanomaterials, we aim to develop innovative solutions that address global challenges. Our research focuses on the synthesis, characterization, and application of nanostructures, with an emphasis on sustainability and real-world impact. Join us as we push the boundaries of what is possible at the nanoscale.
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="primary">View Details</Button>
                  <Button variant="outline-primary">Contact Team</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="company-numbers">
          <h2>Research Impact</h2>
          <p>
            Our research clusters have made significant contributions to science and
            industry through various projects and collaborations.
          </p>
          <Row className="g-4">
            <Col md={3}>
              <div className="number-box">
                <img src="/images/projects-icon.png" alt="Projects Icon" className="number-icon" />
                <h3 id="projects-count" ref={projectsRef}>0+</h3>
                <p>Research Projects</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="number-box">
                <img src="/images/partners-icon.png" alt="Partners Icon" className="number-icon" />
                <h3 id="partners-count" ref={partnersRef}>0+</h3>
                <p>Industry Partners</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="number-box">
                <img src="/images/publications-icon.png" alt="Publications Icon" className="number-icon" />
                <h3 id="publications-count" ref={publicationsRef}>0+</h3>
                <p>Publications</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="number-box">
                <img src="/images/patents-icon.png" alt="Patents Icon" className="number-icon" />
                <h3 id="patents-count" ref={patentsRef}>0+</h3>
                <p>Patents</p>
              </div>
            </Col>
          </Row>
        </div>

        <section className="research-teams">
          <div className="container">
            {/* Nanotechnology Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6">
                  <div className="research-image">
                    <img 
                      src={process.env.PUBLIC_URL + '/sorces/Research Cluster/nanotech-image.jpg'} 
                      alt="Nanotechnology Research" 
                      className="img-fluid research-main-image" 
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="research-content text-center">
                    <h2 className="section-title">Nanotechology</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">Please find some details about your group</h5>
                    <div 
                      id="carouselNanotech" 
                      className="carousel slide" 
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Panya Sunintaboon</h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Pramuan Tangboriboonrat</h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Thanchanok Ratvijitvech</h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Anyarat Watthanaphanit</h5>
                            <p className="lab-name">Laboratory Name</p>
                          </div>
                        </div>
                      </div>
                      <div className="staff-carousel">
                        <ol className="carousel-indicators custom-indicators">
                          <li data-bs-target="#carouselNanotech" data-bs-slide-to="0" className="active">
                            <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/7.%20Panya%20Sunintaboon.jpg'}  alt="Panya Sunintaboon" />
                          </li>
                          <li data-bs-target="#carouselNanotech" data-bs-slide-to="1">
                            <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/2.%20Pramuan%20Tangboriboonrat.jpg'} alt="Pramuan Tangboriboonrat" />
                          </li>
                          <li data-bs-target="#carouselNanotech" data-bs-slide-to="2">
                            <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/17.%20Thanchanok%20Ratvijitvech.jpg'} alt="Thanchanok Ratvijitvech" />
                          </li>
                          <li data-bs-target="#carouselNanotech" data-bs-slide-to="3">
                            <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/12.%20Anyarat%20Watthanaphanit.jpg'} alt="Anyarat Watthanaphanit" />
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Rubber Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="research-image">
                    <img 
                      src={process.env.PUBLIC_URL + '/sorces/Research Cluster/rubber-logo.jpg'} 
                      alt="Natural Rubber Research" 
                      className="img-fluid research-main-image" 
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="research-content">
                    <h2 className="section-title">Natural Rubber</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">Please find some details about your group</h5>
                    <div 
                      id="carouselRubber" 
                      className="carousel slide" 
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "We are developing innovative rubber compounds for sustainable applications in various industries. Our research focuses on improving natural rubber properties and creating eco-friendly solutions."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Jitladda Sakdapipanich</h5>
                            <p className="lab-name">Rubber Technology Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research focuses on improving natural rubber properties for advanced applications, ensuring sustainable development in the rubber industry."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Pranee Phinyocheep</h5>
                            <p className="lab-name">Rubber Processing Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We specialize in developing eco-friendly rubber products for the future, combining innovation with sustainability."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Preeyanuch Junkong</h5>
                            <p className="lab-name">Sustainable Rubber Laboratory</p>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators custom-indicators">
                        <li data-bs-target="#carouselRubber" data-bs-slide-to="0" className="active">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/4.%20Jitladda%20Sakdapipanich.jpg'} alt="Jitladda Sakdapipanich" />
                        </li>
                        <li data-bs-target="#carouselRubber" data-bs-slide-to="1">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/6.%20Pranee%20Phinyocheep.jpg'} alt="Pranee Phinyocheep" />
                        </li>
                        <li data-bs-target="#carouselRubber" data-bs-slide-to="2">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/16.%20Preeyanuch%20Junkong.jpg'} alt="Preeyanuch Junkong" />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Composite Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6">
                  <div className="research-image">
                    <img 
                      src={process.env.PUBLIC_URL + '/sorces/Research Cluster/advanced-image.jpg'} 
                      alt="Advanced Composite Research" 
                      className="img-fluid research-main-image" 
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="research-content">
                    <h2 className="section-title">Advanced Composite</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">Please find some details about your group</h5>
                    <div 
                      id="carouselComposite" 
                      className="carousel slide" 
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "Our team develops advanced composite materials for aerospace and automotive applications, pushing the boundaries of material science."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Supa Wirasate</h5>
                            <p className="lab-name">Composite Materials Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We focus on creating sustainable composite materials for the construction industry, combining strength with environmental responsibility."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Chayanisa Chitichotpanya</h5>
                            <p className="lab-name">Structural Composites Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research aims to develop bio-based composites for various applications, leading the way in sustainable material innovation."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Kalyanee Sirisinha</h5>
                            <p className="lab-name">Bio-Composites Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research aims to develop bio-based composites for various applications, leading the way in sustainable material innovation."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Manthana Jariyaboon</h5>
                            <p className="lab-name">Bio-Composites Laboratory</p>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators custom-indicators">
                        <li data-bs-target="#carouselComposite" data-bs-slide-to="0" className="active">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/9.%20Supa%20Wiraset.jpg'} alt="Supa Wirasate" />
                        </li>
                        <li data-bs-target="#carouselComposite" data-bs-slide-to="1">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/unknown.jpg'} alt="Chayanisa Chitichotpanya" />
                        </li>
                        <li data-bs-target="#carouselComposite" data-bs-slide-to="2">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/5.%20Kalyanee%20Sirisingha.jpg'} alt="Kalyanee Sirisinha" />
                        </li>
                        <li data-bs-target="#carouselComposite" data-bs-slide-to="2">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/unknown.jpg'} alt="Manthana Jariyaboon" />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applied Industry Section */}
            <div className="tester_new">
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="research-image">
                    <img 
                      src={process.env.PUBLIC_URL + '/sorces/Research Cluster/industry-image.jpg'} 
                      alt="Applied Industry Research" 
                      className="img-fluid research-main-image" 
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="research-content">
                    <h2 className="section-title">Applied Industry</h2>
                    <div className="section-underline"></div>
                    <h5 className="section-subtitle">Please find some details about your group</h5>
                    <div 
                      id="carouselIndustry" 
                      className="carousel slide" 
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <p className="quote-text">
                            "We work closely with industry partners to develop practical solutions for manufacturing challenges, bridging the gap between research and application."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Chakrit Sirisinha</h5>
                            <p className="lab-name">Industrial Applications Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "Our research focuses on improving industrial processes through innovative materials, ensuring efficiency and sustainability."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Darapond Triampo</h5>
                            <p className="lab-name">Process Innovation Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We develop sustainable solutions for industrial applications using advanced materials, creating a better future for manufacturing."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Sombat Thanawan</h5>
                            <p className="lab-name">Sustainable Industry Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We develop sustainable solutions for industrial applications using advanced materials, creating a better future for manufacturing."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Taweechai Amornsakchai</h5>
                            <p className="lab-name">Sustainable Industry Laboratory</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <p className="quote-text">
                            "We develop sustainable solutions for industrial applications using advanced materials, creating a better future for manufacturing."
                          </p>
                          <div className="staff-info">
                            <div className="staff-divider"></div>
                            <h5 className="staff-name">Thammasit Vongsetskul</h5>
                            <p className="lab-name">Sustainable Industry Laboratory</p>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators custom-indicators">
                        <li data-bs-target="#carouselIndustry" data-bs-slide-to="0" className="active">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/3.%20Chakrit%20Sirisingha.jpg'} alt="Chakrit Sirisinha" />
                        </li>
                        <li data-bs-target="#carouselIndustry" data-bs-slide-to="1">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/14.%20Darapond%20Triampo.jpg'} alt="Darapond Triampo" />
                        </li>
                        <li data-bs-target="#carouselIndustry" data-bs-slide-to="2">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/8.%20Sombat%20Thanawan.jpg'} alt="Sombat Thanawan" />
                        </li>
                        <li data-bs-target="#carouselIndustry" data-bs-slide-to="3">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/10.%20Taweechai%20Amornsakchai.jpg'} alt="Taweechai Amornsakchai" />
                        </li>
                        <li data-bs-target="#carouselIndustry" data-bs-slide-to="4">
                          <img src={process.env.PUBLIC_URL + '/sorces/Single Photo/unknown.jpg'} alt="Thammasit Vongsetskul" />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

export default ResearchCluster; 