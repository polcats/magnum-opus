import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, capitalize, CardActionArea, Chip, SxProps, Theme, useTheme } from '@mui/material';
import { ConstructionRounded } from '@mui/icons-material';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { Project, TagColor } from '@/types/landing';
import Image from 'next/image';
import { useMemo } from 'react';
import { useMotion } from 'react-use';

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  icon,
  notes,
  href,
  tags = [],
}) => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();
  const isPrivate = tags.includes('private');

  const styles: SxProps<Theme> = {
    minHeight: {
      xs: 'auto',
      sm: 370,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.background.default,
  };

  const cardContent = () => (
    <>
      {image ? (
        <CardMedia
          component={Image}
          sx={{
            height: {
              xs: 80,
              sm: 140,
            },
          }}
          image={image}
          alt={title}
        />
      ) : (
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            height: 80,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
            borderBottom: `1px solid ${mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100]}`,
            backgroundColor: mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
          }}
        >
          <>{icon ?? <ConstructionRounded sx={{ fontSize: 50 }} />}</>
        </Box>
      )}

      <CardContent sx={{ width: '100%', flex: 1 }}>
        <Typography gutterBottom variant="h6">
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
      {tags.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            width: '100%',
            gap: 1,
            p: 1,
          }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={capitalize(tag)}
              sx={{
                backgroundColor:
                  tag in TagColor ? TagColor[tag as keyof typeof TagColor] : TagColor.default,
                color: 'white',
                fontWeight: '800',
              }}
            />
          ))}
        </Box>
      )}
    </>
  );

  return (
    <Card
      key={mode}
      sx={{
        minWidth: {
          xs: '100%',
          sm: 280,
        },
        maxWidth: {
          xs: '100%',
          sm: 280,
        },
      }}
    >
      {isPrivate || !href ? (
        <Box sx={styles}>{cardContent()}</Box>
      ) : (
        <CardActionArea sx={styles} {...(href ? { href } : {})}>
          {cardContent()}
        </CardActionArea>
      )}
    </Card>
  );
};
