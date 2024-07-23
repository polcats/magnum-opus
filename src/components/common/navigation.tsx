import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Item = {
  name: string;
  content: string; // | Item[];
};

const NAV_ITEMS: Item[] = [
  {
    name: 'Home',
    content: '/',
  },
  {
    name: 'Projects',
    content: '/projects',
    // content: [
    //   {
    //     name: 'Flight Tracker',
    //     content: '/flight-tracker',
    //   },
    // ],
  },
];

type Props = {
  type: 'home' | 'subpage';
};

export const Navigation: React.FC<Props> = ({ type }) => {
  return (
    <AppBar component="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Toolbar sx={{ justifyContent: type === 'home' ? 'flex-end' : 'flex-start' }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {type === 'home' ? (
            NAV_ITEMS.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }} href={item.content}>
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
