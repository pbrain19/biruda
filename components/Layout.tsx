import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import {
  AppBar,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  MenuIcon,
  ChevronLeftIcon,
  ListItemIcon,
  ListItemText,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  StylesProvider,
} from './common';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

const myTheme = createMuiTheme();

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
import { ContainerProps } from '@material-ui/core';

interface AdditionalProps {
  open?: boolean;
  drawerwidth?: number;
  component?: string;
}

type Props = {
  title?: string;
};

const Root = styled.div`
  display: flex;
`;

const StyledAppBar = styled(AppBar)<AdditionalProps>`
  z-index: ${props => props.theme.zIndex.drawer + 1};
  transition: ${props =>
    props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen,
    })};

  ${props =>
    props.open
      ? css`
    margin-left: ${props.drawerwidth}px,
    width: calc(100% - ${props.drawerwidth}px),
    transition: ${props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.enteringScreen,
    })}
  `
      : ''};
`;

const StyledIconButton = styled(IconButton)<AdditionalProps>`
  z-index: ${props => props.theme.zIndex.drawer + 1};
  transition: ${props =>
    props.theme.transitions.create(['width', 'margin'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen,
    })};

  ${props =>
    !props.open
      ? css`
          display: none;
        `
      : ''};
`;

const StyledTypography = styled(Typography)<AdditionalProps>`
  flex-grow: 1;
`;

const StyledDrawer = styled(({ drawerwidth, ...rest }) => (
  <Drawer
    {...rest}
    drawerwidth={drawerwidth}
    classes={{ paper: 'paper-override' }}
  />
))`
  width: ${props => props.drawerwidth}px;

  & .paper-override {
    position: relative;
    white-space: nowrap;
    width: ${props => props.drawerwidth}px;
    transition: ${props =>
      props.theme.transitions.create('width', {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.enteringScreen,
      })};

    ${props => css`
      [${props.theme.breakpoints.up('sm')}]: {
        width: ${props.theme.spacing(9)};
      };
    `};

    ${props =>
      !props.open
        ? css`
            overflow-x: hidden;
            transition: ${props.theme.transitions.create('width', {
              easing: props.theme.transitions.easing.sharp,
              duration: props.theme.transitions.duration.leavingScreen,
            })};
            width: ${props.theme.spacing(7)}px;
          `
        : ''};
  }
`;

// @ts-ignore
const ToolbarIcon = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: 'flex-end';
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
const DRAWER_WIDTH = 250;
const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={myTheme}>
        <ThemeProvider theme={myTheme}>
          <Root>
            <StyledAppBar
              position="absolute"
              drawerwidth={DRAWER_WIDTH}
              open={open}
            >
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
                  drawerwidth={DRAWER_WIDTH}
                  open={open}
                >
                  <MenuIcon />
                </StyledIconButton>
                <StyledTypography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  Dashboard
                </StyledTypography>
              </Toolbar>
            </StyledAppBar>

            <StyledDrawer
              drawerwidth={DRAWER_WIDTH}
              variant="permanent"
              open={open}
              key={JSON.stringify(open)}
            >
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
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Layout;
