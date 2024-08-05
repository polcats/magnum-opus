import { PauseCircleFilled, PlayCircleFilled, Replay } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

import { useVisualgo } from '@/hooks/useVisualgo';
import { AnimationState } from '@/types/visualgo';

export const MenuButtons: React.FC = () => {
  const { play, pause, reset, animationState } = useVisualgo();

  return (
    <Grid
      item
      sx={{
        alignSelf: 'center',
      }}
    >
      <IconButton onClick={play} title="Play" size="small">
        <PlayCircleFilled
          color={
            animationState === AnimationState.idle || animationState === AnimationState.paused
              ? 'primary'
              : 'disabled'
          }
          fontSize="large"
        />
      </IconButton>

      <IconButton onClick={pause} title="Pause" size="small">
        <PauseCircleFilled
          color={animationState !== AnimationState.running ? 'disabled' : 'primary'}
          fontSize="large"
        />
      </IconButton>

      <IconButton onClick={reset} title="Reset" size="small">
        <Replay
          color={animationState !== AnimationState.running ? 'primary' : 'disabled'}
          fontSize="large"
        />
      </IconButton>
    </Grid>
  );
};
