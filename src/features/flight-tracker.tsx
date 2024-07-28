'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Snackbar,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { AirplaneFinder } from '@/components/flight-tracker/finder';
import { AirplaneMap } from '@/components/flight-tracker/map';
import { AircraftTrack, AircraftData, SnackBar } from '@/types/flight-tracker';
import { Navigation } from '@/components/common/navigation';
import { useApi } from '@/hooks/useApi';
import { appConfig } from '@/app.config';

export const FlightTracker = () => {
  const api = useApi();
  const [aircraftData, setAircraftData] = useState<AircraftData | null>(null);
  const [icao24, setIcao24] = useState<string | null>(null);
  const [tracks, setTracks] = useState<AircraftTrack | null>(null);
  const [snackBar, setSnackBar] = useState<SnackBar>({
    open: false,
    message: '',
  });
  const initialFetch = useRef(true);

  const positions = useMemo(
    () => tracks?.path.map((point) => [point[1], point[2]] as LatLngExpression),
    [tracks?.path]
  );

  const latestPosition = useMemo(
    () => (tracks ? tracks.path[tracks.path.length - 1] : undefined),
    [tracks]
  );

  const heading = useMemo(
    () => (aircraftData ? aircraftData.states[aircraftData.states.length - 1][10] : 0),
    [aircraftData]
  );

  const handleSetIcao24 = useCallback((_icao24: string) => {
    setIcao24(_icao24);
    initialFetch.current = true;
  }, []);

  const handleSetMessage = useCallback((message: string) => {
    setSnackBar((current) => ({ ...current, open: true, message }));
  }, []);

  const getFlightData = useCallback(
    async (_icao24: string) => {
      try {
        const tracks = await api.flightTracker.fetchAirplaneTracks(_icao24);
        const data = await api.flightTracker.fetchAircraftData(_icao24);
        setTracks(tracks);
        setAircraftData(data);
      } catch (e) {
        console.log(e);
        setSnackBar((current) => ({
          ...current,
          message: 'Oops! Something went wrong. Please try again.',
        }));
      }
    },
    [api.flightTracker]
  );

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

    const intervalId = setInterval(fetch, appConfig.MAP_UPDATE_INTERVAL);
    return () => clearInterval(intervalId);
  }, [getFlightData, icao24]);

  return (
    <>
      <Navigation type="subpage" />

      <Box
        sx={{
          justifyContent: 'center',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AirplaneFinder setIcao24={handleSetIcao24} handleSetMessage={handleSetMessage} />
        <AirplaneMap heading={heading} positions={positions} />

        {aircraftData && (
          <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
            Map automatically updates every {appConfig.MAP_UPDATE_INTERVAL / 1000} second(s){' '}
          </Typography>
        )}

        <Typography
          variant="caption"
          sx={{ textAlign: 'center', mt: 2, fontStyle: 'italic', pl: 3, pr: 3 }}
        >
          Matthias Schäfer, Martin Strohmeier, Vincent Lenders, Ivan Martinovic and Matthias
          Wilhelm. &quot;Bringing Up OpenSky: A Large-scale ADS-B Sensor Network for Research&quot;.
          In Proceedings of the 13th IEEE/ACM International Symposium on Information Processing in
          Sensor Networks (IPSN), pages 83-94, April 2014.
        </Typography>

        {aircraftData ? (
          <Accordion sx={{ width: '90%', mt: 2 }} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {aircraftData.states[0][1]} Details
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Typography sx={{ fontWeight: '700' }}>Country:</Typography>
                {aircraftData.states[0][2]}
              </Typography>
              <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Typography sx={{ fontWeight: '700' }}>On Ground:</Typography>
                {latestPosition?.[5] ? 'Yes' : 'No'}
              </Typography>
              <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Typography sx={{ fontWeight: '700' }}>Longitude:</Typography>
                {latestPosition?.[2]}
              </Typography>
              <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Typography sx={{ fontWeight: '700' }}>Latitude:</Typography>
                {latestPosition?.[1]}
              </Typography>
              <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Typography sx={{ fontWeight: '700' }}>Altitude:</Typography>
                {latestPosition?.[3] || 0} meters
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}

        <Snackbar
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackBar.open}
          onClose={() => {
            setSnackBar((current) => ({ ...current, open: false }));
          }}
          message={snackBar.message}
          key={snackBar.message + snackBar.open}
        >
          <Alert
            variant="filled"
            severity="error"
            onClose={() => {
              setSnackBar((current) => ({ ...current, open: false }));
            }}
            sx={{ width: '100%' }}
          >
            {snackBar.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default FlightTracker;
