import React from 'react';
import { Card, Title, InfoGrid, InfoItem, Label, Value } from './styles.ts';
import { Planet } from '../../types/Planet';
import { formatValue } from '../../utils/formatters.ts';

interface PlanetCardProps {
  planet: Planet;
}


const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  return (
    <Card>
      <Title>{planet.name}</Title>
      <InfoGrid>
        <InfoItem>
          <Label>Climate</Label>
          <Value>{planet.climate}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Terrain</Label>
          <Value>{planet.terrain}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Population</Label>
          <Value>{planet.population}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Diameter</Label>
          <Value>{formatValue(planet.diameter, "km")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Gravity</Label>
          <Value>{planet.gravity}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Orbital Period</Label>
          <Value>{formatValue(planet.orbital_period, "days")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Rotation Period</Label>
          <Value>{formatValue(planet.rotation_period, "hours")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Surface Water</Label>
          <Value>{formatValue(planet.surface_water, "%")}</Value>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default PlanetCard;
