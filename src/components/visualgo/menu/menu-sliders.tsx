import { Grid, Slider, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';

import { useVisualgo } from '@/hooks/useVisualgo';
import { AnimationState } from '@/types/visualgo';

export const MenuSliders: React.FC = () => {
  const { speed, count, animationState, setCount, setSpeed, generateBars } = useVisualgo();

  const getAriaValueText = useCallback((value: number) => `${value}`, []);
  const handleSpeedChange = useCallback(
    (e: Event, value: number | number[]) => setSpeed(value as number),
    [setSpeed]
  );
  const handleCountChange = useCallback(
    (e: Event, value: number | number[]) => {
      setCount(value as number);
    },
    [setCount]
  );

  useEffect(() => {
    generateBars();
  }, [count, generateBars]);

  return (
    <>
      <Grid item>
        <Typography id="discrete-slider">Speed</Typography>
        <Slider
          size="small"
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: 150,
            },
          }}
          value={speed}
          getAriaValueText={getAriaValueText}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
          onChange={handleSpeedChange}
          disabled={
            animationState === AnimationState.running || animationState === AnimationState.finished
          }
        />
      </Grid>
      <Grid item>
        <Typography id="discrete-slider">Elements</Typography>
        <Slider
          size="small"
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: 150,
            },
          }}
          value={count}
          getAriaValueText={getAriaValueText}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={20}
          onChange={handleCountChange}
          disabled={animationState !== AnimationState.idle}
        />
      </Grid>
    </>
  );
};
