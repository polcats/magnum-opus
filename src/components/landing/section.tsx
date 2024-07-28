import { Box, useTheme } from '@mui/material';

type Props = React.PropsWithChildren<{
  id: string;
  alt?: boolean;
}>;

export const Section: React.FC<Props> = ({ id, alt, children }) => {
  const theme = useTheme();
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        minHeight: '90vh', // intentional: I want the adjacent section(s) to be partially visible
        py: 6,
        px: { xs: 3, sm: 6 },
        backgroundColor: alt ? theme.palette.grey[900] : theme.palette.background.default,
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};
