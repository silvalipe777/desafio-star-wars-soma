import { useEffect } from 'react';
import StarshipCard from '../components/StarshipCard/StarshipCard.tsx';
import { useRandomItem } from '../hooks/useRandomItem.ts';
import { Starship } from '../types/Starship.ts';
import { Container } from '../components/ui/Container.tsx';
import RandomButton from '../components/ui/RandomButton.tsx';

const Starships = () => {
  const { data, loading, error, fetchRandom } = useRandomItem<Starship>('starships');

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><RandomButton onClick={fetchRandom} label="Get Random Starship" />Error: {error.message}</Container>;
  if (!data) return null;

  return (
    <div>
      <RandomButton onClick={fetchRandom} label="Get Random Starship" />
      <StarshipCard starship={data} />
    </div>
  );
};

export default Starships;
