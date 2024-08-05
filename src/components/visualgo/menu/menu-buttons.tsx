import { PauseCircleFilled, PlayCircleFilled, Replay } from '@mui/icons-material';
import { Grid, IconButton, Tooltip } from '@mui/material';

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
      <Tooltip title="Play" placement="top">
        <IconButton onClick={play} size="small">
          <PlayCircleFilled
            color={
              animationState === AnimationState.idle || animationState === AnimationState.paused
                ? 'primary'
                : 'disabled'
            }
            fontSize="large"
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Pause" placement="top">
        <IconButton onClick={pause} size="small">
          <PauseCircleFilled
            color={animationState !== AnimationState.running ? 'disabled' : 'primary'}
            fontSize="large"
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reset" placement="top">
        <IconButton onClick={reset} size="small">
          <Replay
            color={animationState !== AnimationState.running ? 'primary' : 'disabled'}
            fontSize="large"
          />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};
