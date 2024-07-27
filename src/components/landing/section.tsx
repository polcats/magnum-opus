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
        minHeight: '90vh',
        py: 6,
        px: { xs: 3, sm: 6 },
        backgroundColor: theme.palette.grey[alt ? 500 : 900],
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};
