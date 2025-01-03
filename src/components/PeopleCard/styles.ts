import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(26, 26, 26, 0.9);
  border-radius: 10px;
  padding: 2rem;
  color: #ffd700;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

export const Value = styled.span`
  color: #ffd700;
  font-size: 1.1rem;
`;