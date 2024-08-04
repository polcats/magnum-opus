import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

type Item = {
  name: string;
  id: string;
};

const NAV_ITEMS: Item[] = [
  {
    name: 'Profile',
    id: 'Profile',
  },
  {
    name: 'Experience',
    id: 'Experience',
  },
  {
    name: 'Projects',
    id: 'Projects',
  },
];

type Props = {
  type: 'home' | 'subpage';
};

export const Navigation: React.FC<Props> = ({ type }) => {
  const { toggleMode, mode } = useThemeSwitcher();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      component="nav"
      sx={{
        display: { xs: type == 'home' ? 'none' : 'block', sm: 'block' },
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: type === 'home' ? 'flex-end' : 'flex-start',
          alignSelf: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ display: { xs: type === 'home' ? 'none' : 'block', sm: 'block' } }}>
          {type === 'home' ? (
            <>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: '#fff' }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </Button>
              ))}
              <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </>
          ) : (
            <IconButton href="/">
              <ArrowBackIcon sx={{ color: '#FFFFFF' }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
