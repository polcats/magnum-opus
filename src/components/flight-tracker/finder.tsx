import React, { useCallback, useState } from 'react';
import { TextField, Container, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { useApi } from '@/hooks/useApi';

type Props = {
  setIcao24: (icao24: string) => void;
  handleSetMessage: (message: string) => void;
};

export const AirplaneFinder: React.FC<Props> = ({ setIcao24, handleSetMessage }) => {
  const api = useApi();
  const [flightNumber, setFlightNumber] = useState('');
  const [locked, setLocked] = useState(false);

  const handleSubmit = useCallback(async () => {
    setLocked(true);

    try {
      const icao24 = await api.flightTracker.fetchIcao24ByFlightNumber(flightNumber);
      setIcao24(icao24);
    } catch (error: any) {
      console.log('Error:', error);
      if (error.message) {
        handleSetMessage(error.message);
      }
    } finally {
      setLocked(false);
    }
  }, [api.flightTracker, flightNumber, handleSetMessage, setIcao24]);

  return (
    <Container sx={{ mt: 12 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
          gap: 2,
        }}
      >
        <TextField
          label="eg. PR222"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          variant="outlined"
          sx={{ width: '300px' }}
          size="small"
          disabled={locked}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          loadingPosition="center"
          onClick={handleSubmit}
          disabled={flightNumber.trim().length === 0}
          loading={locked}
        >
          Find Flight Number
        </LoadingButton>
      </Box>
    </Container>
  );
};
