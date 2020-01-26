import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Toolbar,
  List,
  Divider,
  IconButton,
  MenuIcon,
  ChevronLeftIcon,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  StylesProvider,
  NoSsr,
  StyledAppBar,
  StyledDrawer,
  StyledContainer,
  StyledIconButton,
  StyledTypography,
  ToolbarIcon,
  StyledContent,
  AppBarSpacer,
} from './common';
import { fetchWrapper } from '../utils/fetch-wrapper';

import ListItems from './List';
import { CssBaseline } from '@material-ui/core';
import { NextPage } from 'next';
import { FIREBASE_CLIENT } from '../credentials/config';

import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import PersonIcon from '@material-ui/icons/Person';

const myTheme = createMuiTheme();

const Root = styled.div`
  display: flex;
`;

const DRAWER_WIDTH = 250;

const handleGoogleLogin: () => void = () => {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
};

const handleFacebookLogin: () => void = () => {
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
};

const handleLogout: () => void = () => {
  firebase.auth().signOut();
};

interface Props {
  User?: firebase.User | null;
  children?: any;
}

const Layout: NextPage<Props> = ({ children, User }: Props) => {
  const [user, setUser] = React.useState(User);

  React.useEffect(() => {
    firebase.initializeApp(FIREBASE_CLIENT);

    firebase.auth().onAuthStateChanged(async authUser => {
      if (authUser) {
        const token = await authUser.getIdToken();

        const { decodedToken } = await fetchWrapper('/api/login', {
          method: 'POST',
          // eslint-disable-next-line no-undef
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ token }),
        });
        debugger;
        setUser(decodedToken);
      } else {
        setUser(null);
        fetchWrapper('/api/logout', {
          method: 'POST',
          credentials: 'same-origin',
        });
      }
    });
  }, []);

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen: () => void = () => {
    setOpen(true);
  };
  const handleDrawerClose: () => void = () => {
    setOpen(false);
  };

  const AuthButtons = user ? (
    <IconButton edge="end" color="inherit" onClick={handleLogout}>
      Logout
      <PersonIcon />
    </IconButton>
  ) : (
    <React.Fragment>
      <IconButton edge="end" color="inherit" onClick={handleGoogleLogin}>
        Login google
        <PersonIcon />
      </IconButton>

      <IconButton edge="end" color="inherit" onClick={handleFacebookLogin}>
        Login facebook
        <PersonIcon />
      </IconButton>
    </React.Fragment>
  );

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

                  {AuthButtons}
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
                <List>{ListItems}</List>
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

Layout.getInitialProps = async ({ req }: any) => {
  const User: firebase.User =
    req && req.session ? req.session.decodedToken : null;

  return { User };
};

export default Layout;
