import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { Box, useTheme } from '@mui/material';

type Props = React.PropsWithChildren<{
  id: string;
  alt?: boolean;
}>;

export const Section: React.FC<Props> = ({ id, alt, children }) => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        minHeight: '80vh', // intentional: I want the adjacent section(s) to be partially visible
        py: 6,
        px: { xs: 3, sm: 6 },
        backgroundColor: alt
          ? mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[100]
          : theme.palette.background.default,
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};
