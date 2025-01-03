import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(26, 26, 26, 0.9);
  border-radius: 10px;
  padding: 2rem;
  color: #ffd700;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Value = styled.span`
  color: #ffd700;
  font-size: 1.1rem;
  font-weight: 600;
`;