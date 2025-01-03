import { useEffect } from 'react';
import PeopleCard from '../components/PeopleCard/PeopleCard.tsx';
import { useRandomItem } from '../hooks/useRandomItem.ts';
import { People } from '../types/People.ts';
import { Container } from '../components/ui/Container.tsx';
import RandomButton from '../components/ui/RandomButton.tsx';

const Peoples = () => {
  const { data, loading, error, fetchRandom } = useRandomItem<People>('people');

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><RandomButton onClick={fetchRandom} label="Get Random people" />Error: {error.message}</Container>;
  if (!data) return null;

  return (
    <div>
      <RandomButton onClick={fetchRandom} label="Get Random people" />
      <PeopleCard people={data} />
    </div>
  );
};

export default Peoples;