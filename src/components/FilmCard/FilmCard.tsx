import React from 'react';
import { Film } from '../../types/Film';
import {
  Card,
  Title,
  InfoGrid,
  InfoItem,
  Label,
  Value,
  OpeningCrawl
} from './styles.ts';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <Card>
      <Title>{film.title}</Title>
      <OpeningCrawl>{film.opening_crawl}</OpeningCrawl>
      <InfoGrid>
        <InfoItem>
          <Label>Episode</Label>
          <Value>{film.episode_id}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Director</Label>
          <Value>{film.director}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Producer</Label>
          <Value>{film.producer}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Release Date</Label>
          <Value>{new Date(film.release_date).toLocaleDateString()}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Characters</Label>
          <Value>{film.characters.length}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Planets</Label>
          <Value>{film.planets.length}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Starships</Label>
          <Value>{film.starships.length}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Vehicles</Label>
          <Value>{film.vehicles.length}</Value>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default FilmCard;