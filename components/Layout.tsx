import * as React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Grid,
  ListItem,
  MenuIcon,
  NotificationsIcon,
  ChevronLeftIcon,
  ListItemIcon,
  ListItemText,
} from './common';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);
import { ContainerProps, DrawerProps } from '@material-ui/core';

type Props = {
  title?: string;
};

const Root = styled.div`
  display: 'flex';
`;

const StyledToolbar = styled(Toolbar)`
  padding-right: 24;
`;

interface AdditionalProps {
  open?: boolean;
  drawerWidth?: number;
  component?: string;
}

const StyledAppBar = styled(AppBar)<AdditionalProps>`
  z-index: ${props => props.theme.zIndex.drawer + 1};
  transition: ${props =>
    props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen,
    })};

  ${props =>
    props.open &&
    css`
    margin-left: ${props.drawerWidth}px,
    width: calc(100% - ${props.drawerWidth}px),
    transition: ${props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.enteringScreen,
    })}
  `};
`;

const StyledIconButton = styled(IconButton)<AdditionalProps>`
  z-index: ${props => props.theme.zIndex.drawer + 1};
  transition: ${props =>
    props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen,
    })};

  ${props =>
    props.open &&
    css`
    margin-left: ${props.drawerWidth}px,
    width: calc(100% - ${props.drawerWidth}px),
    transition: ${props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.enteringScreen,
    })}
  `};
`;

const StyledTypography = styled(Typography)<AdditionalProps>`
  flexgrow: 1;
`;

const StyledDrawer = styled(({ drawerWidth, ...rest }) => (
  <Drawer {...rest} classes={{ paper: 'paper-override' }} />
))`
  width: ${props => props.drawerWidth}px;

  & .paper-override {
    position: relative;
    white-space: nowrap;
    width: ${props => props.drawerWidth};
    transition: ${props =>
        props.theme.transitions.create('width', {
          easing: props.theme.transitions.easing.sharp,
          duration: props.theme.transitions.duration.enteringScreen,
        })}
      ${props =>
        !props.open &&
        css`
          overflow-x: 'hidden';
          transition: ${props.theme.transitions.create('width', {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.leavingScreen,
          })};
          width: ${props.theme.spacing(7)};
        `};
  }
`;

// @ts-ignore
const ToolbarIcon = styled.div`
  display: 'flex';
  alignitems: 'center';
  justifycontent: 'flex-end';
  padding: '0 8px';

  ${props => props.theme.mixins.toolbar}
`;

const StyledContent = styled.main`
  flex-grow: 1;
  height: '100vh';
  overflow: 'auto';
`;

const StyledContainer = styled.div<ContainerProps>`
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
`;

const AppBarSpacer = styled.div`
  ${props => props.theme.mixins.toolbar}
`;

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Root>
      <CssBaseline />
      <StyledAppBar position="absolute" drawerWidth={240} open={open}>
        <Toolbar
          style={{
            paddingRight: 24,
          }}
        >
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            open={open}
          >
            <MenuIcon />
          </StyledIconButton>
          <StyledTypography component="h1" variant="h6" color="inherit" noWrap>
            Dashboard
          </StyledTypography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent" open={open}>
        <ToolbarIcon>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </ToolbarIcon>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </StyledDrawer>

      <StyledContent>
        <AppBarSpacer />
        <StyledContainer maxWidth="lg">{children}</StyledContainer>
      </StyledContent>
    </Root>
  );
};

export default Layout;
