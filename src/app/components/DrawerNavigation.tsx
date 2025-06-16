'use client';
import React, { FC } from 'react';
import {
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { drawerItemsArr } from '@/config/navigation/drawerMenu';

import Link from 'next/link';

export const DrawerNavigation: FC = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {drawerItemsArr.map(({ title, path, icon }, index) => (
          <Link href={path} passHref key={title + index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Button
        onClick={toggleDrawer(true)}
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
        }}
        variant="contained"
        startIcon={<NavigationIcon />}
      >
        Menu
      </Button>
    </div>
  );
};
