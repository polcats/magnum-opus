import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { orange } from '@mui/material/colors';

import { useVisualgo } from '@/hooks/useVisualgo';
import { AnimationState } from '@/types/visualgo';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

export const Bars: React.FC = () => {
  const { bars, animationState, nextStep, speed } = useVisualgo();
  const theme = useTheme();
  const { mode } = useThemeSwitcher();

  useEffect(() => {
    if (animationState !== AnimationState.running) {
      return;
    }

    setTimeout(
      () => {
        nextStep();
      },
      (101 - speed) * 5
    );
  });

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        display: 'flex',
        gap: {
          xs: 0.75,
          sm: 1,
        },
        flex: 1,
        height: '300px',
      }}
    >
      {bars.map((bar, index) => (
        <Grid
          item
          key={index}
          sx={{
            minWidth: {
              xs: 6,
              sm: 20,
              md: 30,
            },
            height: `${bar.value}%`,
          }}
        >
          <Box
            sx={{
              px: '1px',
              height: '100%',
              width: {
                xs: 6,
                sm: 10,
                md: 'auto',
              },
              backgroundColor: bar.isHighlighted
                ? orange[500]
                : mode === 'light'
                  ? theme.palette.grey[400]
                  : theme.palette.grey[700],
              transition: 'background-color ease-in 0.1s',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            <Typography
              variant="body1"
              className="bar-value"
              sx={{
                fontWeight: 'bold',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
                transform: 'rotate(90deg)',
                position: 'relative',
                top: 10,
              }}
            >
              {bar.value}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
