import { useEffect } from 'react';
import FilmCard from '../components/FilmCard/FilmCard.tsx';
import { useRandomItem } from '../hooks/useRandomItem.ts';
import { Film } from '../types/Film.ts';
import { Container } from '../components/ui/Container.tsx';
import RandomButton from '../components/ui/RandomButton.tsx';

const Films = () => {
  const { data, loading, error, fetchRandom } = useRandomItem<Film>('films');

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><RandomButton onClick={fetchRandom} label="Get Random Film" />Error: {error.message}</Container>;
  if (!data) return null;

  return (
    <div>
      <RandomButton onClick={fetchRandom} label="Get Random Film" />
      <FilmCard film={data} />
    </div>
  );
};

export default Films;
