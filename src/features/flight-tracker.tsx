'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container } from '@mui/material';
import { LatLngExpression } from 'leaflet';

import { AirplaneFinder } from '@/components/flight-tracker/finder';
import { AirplaneMap } from '@/components/flight-tracker/map';
import { AircraftTrack, AircraftData } from '@/types/flight-tracker';
import { fetchAircraftData, fetchAirplaneTracks } from '@/utils/flight-tracker';

export const FlightTracker = () => {
  const [aircraftData, setAircraftData] = useState<AircraftData | null>(null);
  const [icao24, setIcao24] = useState<string | null>(null);
  const [tracks, setTracks] = useState<AircraftTrack | null>(null);
  const initialFetch = useRef(true);

  const positions = useMemo(
    () => tracks?.path.map((point) => [point[1], point[2]] as LatLngExpression),
    [tracks?.path]
  );

  const heading = useMemo(
    () => aircraftData?.states[aircraftData?.states.length - 1][10],
    [aircraftData?.states]
  );

  const getFlightData = useCallback(async (_icao24: string) => {
    const tracks = await fetchAirplaneTracks(_icao24);
    const data = await fetchAircraftData(_icao24);
    setTracks(tracks);
    setAircraftData(data);
  }, []);

  useEffect(() => {
    if (!initialFetch.current || !icao24) {
      return;
    }

    const fetch = async () => {
      await getFlightData(icao24);
    };
    fetch();
    initialFetch.current = false;
  }, [getFlightData, icao24]);

  useEffect(() => {
    if (!icao24 || initialFetch.current) {
      return;
    }

    const fetch = async () => {
      await getFlightData(icao24);
    };

    const intervalId = setInterval(fetch, 10000);
    return () => clearInterval(intervalId);
  }, [getFlightData, icao24]);

  return (
    <Container>
      <AirplaneFinder setIcao24={setIcao24} />
      <AirplaneMap heading={heading} positions={positions} />
    </Container>
  );
};

export default FlightTracker;
