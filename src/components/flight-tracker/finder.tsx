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
    if (!flightNumber.trim()) {
      return;
    }

    setLocked(true);

    try {
      const icao24 = await api.flightTracker.fetchIcao24ByFlightNumber(flightNumber);
      setIcao24(icao24);
    } catch (error: any) {
      const message = error.response?.data || error.message;
      if (message) {
        handleSetMessage(message);
      }
    } finally {
      setLocked(false);
    }
  }, [api.flightTracker, flightNumber, handleSetMessage, setIcao24]);

  return (
    <Container
      sx={{
        mt: 12,
        p: 0,
      }}
    >
      <Box
        id="AirplaneFinder"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          paddingLeft: {
            xs: 3,
            sm: 0,
          },
          paddingRight: {
            xs: 3,
            sm: 0,
          },
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
          sx={{
            width: {
              xs: '100%',
              md: '300px',
            },
          }}
          size="small"
          disabled={locked}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
        <LoadingButton
          sx={{
            width: {
              xs: '100%',
              md: 'auto',
            },
          }}
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
