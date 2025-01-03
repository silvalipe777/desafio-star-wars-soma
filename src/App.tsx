import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContainer, MainContent } from './components/ui/Layout.tsx';
import Header from './components/Header.tsx';
import Peoples from './routes/Peoples.tsx';
import Vehicles from './routes/Vehicles.tsx';
import Starships from './routes/Starships.tsx';
import Planets from './routes/Planets.tsx';
import Films from './routes/Films.tsx';
import Species from './routes/Species.tsx';
import Home from './routes/Home.tsx';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/people" element={<Peoples />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/species" element={<Species />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;