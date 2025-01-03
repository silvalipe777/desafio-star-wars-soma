import styled from 'styled-components';
import backgroundImage from '../../assets/images/beautiful-space-background.jpg';

export const AppContainer = styled.div`
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

export const MainContent = styled.main`
  padding: 2rem;
`;