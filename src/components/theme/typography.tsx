import { SxProps, Theme, Typography, TypographyOwnProps, TypographyProps } from '@mui/material';
import { useMemo } from 'react';
import { ResponsiveStyleValue } from '@mui/system';
import { Property } from 'csstype';

type Props = TypographyOwnProps & {};

export const ResponsiveTypography: React.FC<Props> = ({ children, sx, ...props }) => {
  const fontSize: ResponsiveStyleValue<Property.FontSize<string | number>> | undefined =
    useMemo(() => {
      switch (props.variant) {
        case 'h2':
          return {
            xs: '2.55rem',
            sm: '3.75rem',
          };
        case 'h4':
          return {
            xs: '1.6rem',
            sm: '2.125rem',
          };
        case 'h5':
          return {
            xs: '1.25rem',
            sm: '1.35rem',
          };
        case 'subtitle1':
          return {
            xs: '0.9rem',
            sm: '1rem',
          };
        case 'body1':
          return {
            xs: '0.9rem',
            sm: '1rem',
          };
        default:
          return undefined;
      }
    }, []);
  return (
    <Typography {...props} sx={{ ...sx, fontSize }}>
      {children}
    </Typography>
  );
};
