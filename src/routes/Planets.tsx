import { useEffect } from 'react';
import PlanetCard from '../components/PlanetCard/PlanetCard.tsx';
import { useRandomItem } from '../hooks/useRandomItem.ts';
import { Planet } from '../types/Planet.ts';
import { Container } from '../components/ui/Container.tsx';
import RandomButton from '../components/ui/RandomButton.tsx';

const Planets = () => {
  const { data, loading, error, fetchRandom } = useRandomItem<Planet>('planets');

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><RandomButton onClick={fetchRandom} label="Get Random Planet" />Error: {error.message}</Container>;
  if (!data) return null;

  return (
    <div>
      <RandomButton onClick={fetchRandom} label="Get Random Planet" />
      <PlanetCard planet={data} />
    </div>
  );
};

export default Planets;
