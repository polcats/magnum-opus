import { Typography, TypographyOwnProps } from '@mui/material';
import React, { useMemo } from 'react';
import { ResponsiveStyleValue } from '@mui/system';
import { Property } from 'csstype';

const _ResponsiveTypography: React.FC<TypographyOwnProps> = ({ children, sx, ...props }) => {
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
        case 'caption':
          return {
            xs: '0.70rem',
            sm: '0.75rem',
          };
        default:
          return undefined;
      }
    }, [props.variant]);
  return (
    <Typography {...props} sx={{ ...sx, fontSize }}>
      {children}
    </Typography>
  );
};

export const ResponsiveTypography = React.memo(_ResponsiveTypography);
