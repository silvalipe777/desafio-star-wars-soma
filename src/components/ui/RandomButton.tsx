import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: block;
  margin: 1rem auto;
  
  &:hover {
    background-color: #e6c400;
    transform: scale(0.98);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffd700;
  }
`;

interface RandomButtonProps {
  onClick: () => void;
  label: string;
}

const RandomButton: React.FC<RandomButtonProps> = ({ onClick, label }) => {
  return (
    <Button onClick={onClick}>
      {label}
    </Button>
  );
};

export default RandomButton;
