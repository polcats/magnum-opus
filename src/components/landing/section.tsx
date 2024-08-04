import { Box, SxProps, Theme, useTheme } from '@mui/material';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

type Props = React.PropsWithChildren<{
  id: string;
  alt?: boolean;
  sx?: SxProps<Theme>;
}>;

export const Section: React.FC<Props> = ({ id, alt, sx, children }) => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        minHeight: '80vh', // intentional: I want the adjacent section(s) to be partially visible
        py: '64px', // based on the appbar height, prevents overscroll
        px: { xs: 3, sm: 6 },
        backgroundColor: alt
          ? mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[100]
          : theme.palette.background.default,
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
