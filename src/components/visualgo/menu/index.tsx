import { Grid, useTheme } from '@mui/material';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

import { MenuSliders } from './menu-sliders';
import { MenuSelects } from './menu-selects';
import { MenuButtons } from './menu-buttons';

export const Menu: React.FC = () => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();

  return (
    <Grid
      sx={{
        width: '100%',
        overflow: 'hidden',
        bgcolor: theme.palette.grey[mode === 'light' ? 200 : 800],
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
        justifyContent: 'center',
        py: 2,
        px: 2,
        gap: 2,
      }}
    >
      <MenuSliders />
      <MenuSelects />
      <MenuButtons />
    </Grid>
  );
};
