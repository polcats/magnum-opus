import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip, useTheme } from '@mui/material';
import { QuestionMark, SvgIconComponent } from '@mui/icons-material';

export type ProjectCard = {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactElement<SvgIconComponent>;
  notes?: string;
  beta?: boolean;
  href?: string;
};

export const ProjectCard: React.FC<ProjectCard> = ({
  title,
  description,
  image,
  icon,
  notes,
  beta,
  href,
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ minWidth: 200, maxWidth: 200 }}>
      <CardActionArea
        sx={{
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: theme.palette.background.default,
        }}
        {...(href ? { href } : {})}
      >
        {image ? (
          <CardMedia component="img" height="140" image={image} alt={title} />
        ) : (
          <Box
            sx={{
              height: 140,
              width: 225,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
              borderBottom: '1px solid #000',
              backgroundColor: theme.palette.grey[700],
            }}
          >
            <>{icon ?? <QuestionMark sx={{ fontSize: 100 }} />}</>
          </Box>
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {notes && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
              {notes}
            </Typography>
          )}
        </CardContent>
        {beta && (
          <Chip
            label="Beta"
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
              backgroundColor: 'secondary.main',
              fontWeight: 'bold',
            }}
          />
        )}
      </CardActionArea>
    </Card>
  );
};
