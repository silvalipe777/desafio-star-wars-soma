import React from 'react';
import { Card, Title, InfoGrid, InfoItem, Label, Value } from './styles.ts';
import { People } from '../../types/People.ts';

interface PeopleCardProps {
  people: People;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ people }) => {
  return (
    <Card>
      <Title>{people.name}</Title>
      <InfoGrid>
        <InfoItem>
          <Label>Height</Label>
          <Value>{people.height} cm</Value>
        </InfoItem>
        <InfoItem>
          <Label>Mass</Label>
          <Value>{people.mass} kg</Value>
        </InfoItem>
        <InfoItem>
          <Label>Hair Color</Label>
          <Value>{people.hair_color}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Skin Color</Label>
          <Value>{people.skin_color}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Eye Color</Label>
          <Value>{people.eye_color}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Birth Year</Label>
          <Value>{people.birth_year}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Gender</Label>
          <Value>{people.gender}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Films</Label>
          <Value>{people.films.length}</Value>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default PeopleCard;