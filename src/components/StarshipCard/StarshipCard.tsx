import React from 'react';
import { Card, Title, InfoGrid, InfoItem, Label, Value } from './styles.ts';
import { Starship } from '../../types/Starship';
import { formatValue } from '../../utils/formatters.ts';

interface StarshipCardProps {
  starship: Starship;
}

const StarshipCard: React.FC<StarshipCardProps> = ({ starship }) => {
  return (
    <Card>
      <Title>{starship.name}</Title>
      <InfoGrid>
        <InfoItem>
          <Label>Model</Label>
          <Value>{starship.model}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Manufacturer</Label>
          <Value>{starship.manufacturer}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Class</Label>
          <Value>{starship.starship_class}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Cost</Label>
          <Value>{formatValue(starship.cost_in_credits, "credits")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Length</Label>
          <Value>{formatValue(starship.length, "m")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Crew</Label>
          <Value>{starship.crew}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Passengers</Label>
          <Value>{starship.passengers}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Hyperdrive Rating</Label>
          <Value>{starship.hyperdrive_rating}</Value>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default StarshipCard;