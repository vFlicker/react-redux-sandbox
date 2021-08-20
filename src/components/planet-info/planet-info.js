import React, { useEffect, useState } from 'react';
import './planet-info.css';

const PlanetInfo = ({ id }) => {
  const [planetName, setPlanetName] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`http://swapi.dev/api/planets/${id}/`)
      .then((res) => res.json())
      .then((planet) => !cancelled && setPlanetName(planet.name));

    return () => cancelled = true;
  }, [id]);

  return (
    <div>{id} - {planetName}</div>
  )
};

export default  PlanetInfo;
