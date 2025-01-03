import { useEffect } from 'react';
import SpeciesCard from '../components/SpeciesCard/SpeciesCard.tsx';
import { useRandomItem } from '../hooks/useRandomItem.ts';
import { Specie } from '../types/Specie.ts'; 
import { Container } from '../components/ui/Container.tsx';
import RandomButton from '../components/ui/RandomButton.tsx';

const Species = () => {
  const { data, loading, error, fetchRandom } = useRandomItem<Specie>('species');

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><RandomButton onClick={fetchRandom} label="Get Random Species" />Error: {error.message}</Container>;
  if (!data) return null;

  return (
    <div>
      <RandomButton onClick={fetchRandom} label="Get Random Species" />
      <SpeciesCard species={data} />
    </div>
  );
};

export default Species;
