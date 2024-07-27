import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Item = {
  name: string;
  id: string; // | Item[];
};

const NAV_ITEMS: Item[] = [
  {
    name: 'Profile',
    id: 'Profile',
  },
  {
    name: 'Projects',
    id: 'Projects',
  },
  {
    name: 'Experience',
    id: 'Experience',
  },
];

type Props = {
  type: 'home' | 'subpage';
};

export const Navigation: React.FC<Props> = ({ type }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar component="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Toolbar sx={{ justifyContent: type === 'home' ? 'flex-end' : 'flex-start' }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {type === 'home' ? (
            NAV_ITEMS.map((item) => (
              <Button
                key={item.name}
                sx={{ color: '#fff' }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </Button>
            ))
          ) : (
            <IconButton href="/">
              <ArrowBackIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
