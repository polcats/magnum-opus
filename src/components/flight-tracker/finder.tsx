'use client';

import React, { useCallback, useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

import { fetchIcao24ByFlightNumber } from '../../utils/flight-tracker';

type Props = {
  // eslint-disable-next-line no-unused-vars
  setIcao24: (icao24: string) => void;
};

export const AirplaneFinder: React.FC<Props> = ({ setIcao24 }) => {
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      const icao24 = await fetchIcao24ByFlightNumber(flightNumber);
      setIcao24(icao24);
    } catch (error) {
      console.error('Error fetching airplane data:', error);
    }
  }, [flightNumber, setIcao24]);

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <TextField
          label="eg. PR222"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          variant="outlined"
          margin="normal"
          sx={{ width: '300px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Find Flight Number
        </Button>
      </Box>
    </Container>
  );
};
