import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './planet-info.css';

const getPlanet = async (id) => {
  const res = await fetch(`http://swapi.dev/api/planets/${id}/`);
  return await res.json();
};

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null,
  }), []);

  const [ dateState, setDateState ] = useState(initialState);

  useEffect(() => {
    let cancelled = false;

    setDateState(initialState)

    request()
      .then((data) => !cancelled && setDateState({
        data,
        loading: false,
        error: null,
      }))
      .catch((error) => !cancelled && setDateState({
        data: null,
        loading: false,
        error,
      }));

    return () => cancelled = true;
  }, [ request, initialState ]);

  return dateState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [ id ]);
  return useRequest(request);
};

const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id);

  if (error) {
    return <div>Something is wrong</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{id} - {data && data.name}</div>;
};

export default  PlanetInfo;
