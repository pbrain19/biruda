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
  MenuIcon,
  ChevronLeftIcon,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  StylesProvider,
  NoSsr,
} from './common';

import ListItems from './List';
import { CssBaseline } from '@material-ui/core';
import { NextPage } from 'next';
import { firebase_client } from '../credentials/config';

import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import PersonIcon from '@material-ui/icons/Person';

const myTheme = createMuiTheme();

import { ContainerProps } from '@material-ui/core';

interface AdditionalProps {
  open?: boolean;
  drawerwidth?: number;
  component?: string;
}

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
          position: absolute;
          margin-left: ${props.drawerwidth}px;
          width: calc(100% - ${props.drawerwidth}px);
          transition: ${props.theme.transitions.create(['width', 'margin'], {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.enteringScreen,
          })};
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
    props.open
      ? css`
          display: none;
        `
      : ''};
`;

const StyledTypography = styled(Typography)<AdditionalProps>`
  flex-grow: 1;
`;

const StyledDrawer = styled(({ ...rest }) => (
  <Drawer {...rest} classes={{ paper: 'paper-override' }} />
))`
  width: ${props =>
    props.open ? props.drawerwidth : props.theme.spacing(7)}px;
  transition: ${props =>
    props.theme.transitions.create('width', {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.enteringScreen,
    })};

  > .paper-override {
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
            width: ${props.theme.spacing(7)}px;
            transition: ${props.theme.transitions.create('width', {
              easing: props.theme.transitions.easing.sharp,
              duration: props.theme.transitions.duration.leavingScreen,
            })};
          `
        : ''};
  }
`;

// @ts-ignore
const ToolbarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;

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

const handleGoogleLogin = () => {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
};

const handleFacebookLogin = () => {
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
};

const handleLogout = () => {
  firebase.auth().signOut();
};

const Layout: NextPage = ({ children }) => {
  React.useEffect(() => {
    firebase.initializeApp(firebase_client);
  }, []);
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <NoSsr>
      <CssBaseline />
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

                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleGoogleLogin}
                  >
                    Login google
                    <PersonIcon />
                  </IconButton>

                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleFacebookLogin}
                  >
                    Login facebook
                    <PersonIcon />
                  </IconButton>

                  <IconButton edge="end" color="inherit" onClick={handleLogout}>
                    Logout
                    <PersonIcon />
                  </IconButton>
                </Toolbar>
              </StyledAppBar>

              <StyledDrawer
                drawerwidth={DRAWER_WIDTH}
                variant="permanent"
                open={open}
              >
                <ToolbarIcon>
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ToolbarIcon>
                <Divider />
                <List>
                  <ListItems />
                </List>
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
    </NoSsr>
  );
};

export default Layout;
