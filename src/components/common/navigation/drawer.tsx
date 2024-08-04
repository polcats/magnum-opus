import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { NAV_ITEMS } from '@/constants/landing';

type Props = {
  open: boolean;

  toggleDrawer: () => void;
  scrollToSection: (id: string) => void;
};

const MenuDrawer: React.FC<Props> = ({ open, toggleDrawer, scrollToSection }) => {
  const handleItemClick = (id: string) => {
    toggleDrawer();
    scrollToSection(id);
  };

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.id} disablePadding onClick={() => handleItemClick(item.id)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuDrawer; // use default since this is lazy-loaded
