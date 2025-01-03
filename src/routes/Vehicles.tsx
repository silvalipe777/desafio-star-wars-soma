import { useEffect } from "react";
import VehicleCard from "../components/VehicleCard/VehicleCard.tsx";
import { useRandomItem } from "../hooks/useRandomItem.ts";
import { Vehicle } from "../types/Vehicle.ts";
import { Container } from "../components/ui/Container.tsx";
import RandomButton from "../components/ui/RandomButton.tsx";

const Vehicles = () => {
  const { data, loading, error, fetchRandom } =
    useRandomItem<Vehicle>("vehicles");

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><RandomButton onClick={fetchRandom} label="Get Random Vehicle" />Error: {error.message}</Container>;
  if (!data) return null;

  return (
    <div>
      <RandomButton onClick={fetchRandom} label="Get Random Vehicle" />
      <VehicleCard vehicle={data} />
    </div>
  );
};

export default Vehicles;
