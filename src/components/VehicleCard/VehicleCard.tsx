import React from 'react';
import { Card, Title, InfoGrid, InfoItem, Label, Value } from './styles.ts';
import { Vehicle } from '../../types/Vehicle.ts';
import { formatValue } from '../../utils/formatters.ts';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Card>
      <Title>{vehicle.name}</Title>
      <InfoGrid>
        <InfoItem>
          <Label>Model</Label>
          <Value>{vehicle.model}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Manufacturer</Label>
          <Value>{vehicle.manufacturer}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Class</Label>
          <Value>{vehicle.vehicle_class}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Cost</Label>
          <Value>{formatValue(vehicle.cost_in_credits, "credits")}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Length</Label>
          <Value>{vehicle.length}m</Value>
        </InfoItem>
        <InfoItem>
          <Label>Crew</Label>
          <Value>{vehicle.crew}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Passengers</Label>
          <Value>{vehicle.passengers}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Max Speed</Label>
          <Value>{vehicle.max_atmosphering_speed}</Value>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default VehicleCard;