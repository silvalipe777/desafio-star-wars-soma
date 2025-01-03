import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeImage from '../assets/images/star-removebg.png'; // Substitua pelo caminho correto

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 26, 0.9);
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1000px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
    padding: 4rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const StyledButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #1a1a1a;
  border: 1px solid #ffd700;
  border-radius: 5px;
  color: #ffd700;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd700;
    color: #000;
  }
`;

const Home = () => {
  const buttons = [
    { path: '/people', label: 'People' },
    { path: '/vehicles', label: 'Vehicles' },
    { path: '/starships', label: 'Starships' },
    { path: '/films', label: 'Films' },
    { path: '/species', label: 'Species' },
    { path: '/planets', label: 'Planets' },
  ];

  return (
    <HomeContainer>
      <TextContainer>
        <Heading>Soma - Star Wars Challenge</Heading>
        <ButtonContainer>
          {buttons.map((button) => (
            <StyledButton key={button.path} to={button.path}>
              {button.label}
            </StyledButton>
          ))}
        </ButtonContainer>
      </TextContainer>
      <ImageContainer src={homeImage}/>
    </HomeContainer>
  );
};

export default Home;
