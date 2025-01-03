import React from 'react';
import { Card, Title, InfoGrid, InfoItem, Label, Value } from './styles.ts';
import { Specie } from '../../types/Specie';
import { formatValue } from '../../utils/formatters.ts';

interface SpeciesCardProps {
  species: Specie;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ species }) => {
  return (
    <Card>
      <Title>{species.name}</Title>
      <InfoGrid>
        <InfoItem>
          <Label>Classification</Label>
          <Value>{species.classification}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Designation</Label>
          <Value>{species.designation}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Average Height</Label>
          <Value>{formatValue(species.average_height, "m")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Average Lifespan</Label>
          <Value>{formatValue(species.average_lifespan, "years")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Eye Colors</Label>
          <Value>{species.eye_colors}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Hair Colors</Label>
          <Value>{species.hair_colors}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Skin Colors</Label>
          <Value>{species.skin_colors}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Language</Label>
          <Value>{species.language}</Value>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default SpeciesCard;