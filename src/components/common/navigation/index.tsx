import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { lazy, useState } from 'react';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { NAV_ITEMS } from '@/constants/landing';

const MenuDrawer = lazy(() => import('./drawer'));

type Props = {
  type: 'home' | 'subpage';
};

export const Navigation: React.FC<Props> = ({ type }) => {
  const { toggleMode, mode } = useThemeSwitcher();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {type === 'home' ? (
              <>
                <Box sx={{ display: { xs: type === 'home' ? 'none' : 'block', sm: 'block' } }}>
                  {NAV_ITEMS.map((item) => (
                    <Button
                      key={item.name}
                      sx={{ color: '#fff' }}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    display: {
                      xs: 'flex',
                      sm: 'none',
                    },
                  }}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
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
      {type === 'home' && (
        <MenuDrawer open={open} toggleDrawer={toggleDrawer} scrollToSection={scrollToSection} />
      )}
    </>
  );
};
