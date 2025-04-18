import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import './Staff.css';

// Dummy staff data
const staffData = [
  {
    id: 1,
    name: 'Dr. Krisda Suchiva',
    title: 'Assistant Professor, Honorary Advisor',
    email: 'krisda.suc@mahidol.ac.th',
    image: '/sorces/Single Photo/1.%20Krisda%20Suchiva.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#krisda'
  },
  {
    id: 2,
    name: 'Dr. Pranee Phinyocheep',
    title: 'Professor, Honorary Advisor',
    email: 'pranee.phi@mahidol.ac.th',
    image: '/sorces/Single Photo/6.%20Pranee%20Phinyocheep.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#pranee'
  },
  {
    id: 3,
    name: 'Dr. Pramuan Tangboriboonrat',
    title: 'Distinguished Professor',
    email: 'pramuan.tan@mahidol.ac.th',
    image: '/sorces/Single Photo/2.%20Pramuan%20Tangboriboonrat.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#pramuan'
  },
  {
    id: 4,
    name: 'Dr. Chakrit Sirisinha',
    title: 'Professor',
    email: 'chakrit.sir@mahidol.ac.th',
    image: '/sorces/Single Photo/3.%20Chakrit%20Sirisingha.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#chakrit'
  },
  {
    id: 5,
    name: 'Dr. Jitladda Sakdapipanich',
    title: 'Professor',
    email: 'jitladda.sak@mahidol.ac.th',
    image: '/sorces/Single Photo/4.%20Jitladda%20Sakdapipanich.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#jitladda'
  },
  {
    id: 6,
    name: 'Dr. Kalyanee Sirisinha',
    title: 'Professor',
    email: 'kalyanee.sir@mahidol.ac.th',
    image: '/sorces/Single Photo/5.%20Kalyanee%20Sirisingha.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#kalyanee'
  },
  {
    id: 7,
    name: 'Dr. Panya Sunintaboon',
    title: 'Associate Professor',
    email: 'panya.sun@mahidol.ac.th',
    image: '/sorces/Single Photo/7.%20Panya%20Sunintaboon.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#panya'
  },
  {
    id: 8,
    name: 'Dr. Sombat Thanawan',
    title: 'Associate Professor',
    email: 'sombat.tha@mahidol.ac.th',
    image: '/sorces/Single Photo/8.%20Sombat%20Thanawan.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#sombat'
  },
  {
    id: 9,
    name: 'Dr. Supa Wirasate',
    title: 'Associate Professor',
    email: 'supa.wir@mahidol.ac.th',
    image: '/sorces/Single Photo/9.%20Supa%20Wiraset.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#supa'
  },
  {
    id: 10,
    name: 'Dr. Taweechai Amornsakchai',
    title: 'Associate Professor',
    email: 'taweechai.amo@mahidol.ac.th',
    image: '/sorces/Single Photo/10.%20Taweechai%20Amornsakchai.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#taweechai'
  },
  {
    id: 11,
    name: 'Dr. Thammasit Vongsetskul',
    title: 'Associate Professor',
    email: 'thammasit.von@mahidol.edu',
    image: '/sorces/Single Photo/unknown.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#thammasit'
  },
  {
    id: 12,
    name: 'Dr. Anyarat Watthanaphanit',
    title: 'Assistant Professor, Program Director',
    email: 'anyarat.wat@mahidol.ac.th',
    image: '/sorces/Single Photo/12.%20Anyarat%20Watthanaphanit.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#anyarat'
  },
  {
    id: 13,
    name: 'Dr. Chayanisa Chitichotpanya',
    title: 'Assistant Professor',
    email: 'chayanisa.chi@mahidol.edu',
    image: '/sorces/Single Photo/unknown.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#chayanisa'
  },
  {
    id: 14,
    name: 'Dr. Darapond Triampo',
    title: 'Assistant Professor',
    email: 'darapond.tri@mahidol.edu',
    image: '/sorces/Single Photo/14.%20Darapond%20Triampo.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#darapond'
  },
  {
    id: 15,
    name: 'Dr. Manthana Jariyaboon',
    title: 'Assistant Professor',
    email: 'manthana.jar@mahidol.ac.th',
    image: '/sorces/Single Photo/unknown.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#manthana'
  },
  {
    id: 16,
    name: 'Dr. Preeyanuch Junkong',
    title: 'Assistant Professor',
    email: 'preeyanuch.jun@mahidol.ac.th',
    image: '/sorces/Single Photo/16.%20Preeyanuch%20Junkong.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#preeyanuch'
  },
  {
    id: 17,
    name: 'Dr. Thanchanok Ratvijitvech',
    title: 'Assistant Professor, Secretariat',
    email: 'thanchanok.rat@mahidol.ac.th',
    image: '/sorces/Single Photo/17.%20Thanchanok%20Ratvijitvech.jpg',
    link: 'https://soponudomphon.github.io/mu-website/staff.html#thanchanok'
  }
];

const Staff: React.FC = () => {
  return (
    <div className="staff-page">
      <Container>
        <div className="staff-header">
          <h1>Our Faculty Staff</h1>
          <p>
            Meet our distinguished faculty members who are dedicated to excellence in teaching, 
            research, and innovation in the field of Information Systems.
          </p>
        </div>
        
        <div className="staff-grid">
          {staffData.map((staff) => (
            <div key={staff.id} className="staff-card">
              <div className="staff-image-container">
                <img 
                  src={process.env.PUBLIC_URL + staff.image}
                  alt={staff.name} 
                  className="staff-image"
                />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">
                  <a href={staff.link} target="_blank" rel="noopener noreferrer">
                    {staff.name}
                  </a>
                </h3>
                <p className="staff-title">{staff.title}</p>
                <div className="staff-email">
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${staff.email}`}>{staff.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Staff; 