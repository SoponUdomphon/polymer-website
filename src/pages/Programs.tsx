import React from 'react';
import { Container } from 'react-bootstrap';

interface ProgramsProps {
  type: 'master' | 'phd';
}

const Programs: React.FC<ProgramsProps> = ({ type }) => {
  return (
    <Container className="mt-5 pt-5">
      <h1>{type === 'master' ? 'Master Degree Program' : 'PhD Program'}</h1>
      <p>Content coming soon...</p>
    </Container>
  );
};

export default Programs; 