import React from 'react';
import styled, { css } from 'styled-components';

import { IconButton, AppBar, Drawer, Typography } from '@material-ui/core';
import { ContainerProps } from '@material-ui/core';

interface AdditionalProps {
  open?: boolean;
  drawerwidth?: number;
  component?: string;
}

export const StyledAppBar = styled(AppBar)<AdditionalProps>`
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

export const StyledIconButton = styled(IconButton)<AdditionalProps>`
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

export const StyledTypography = styled(Typography)<AdditionalProps>`
  flex-grow: 1;
`;

export const StyledDrawer = styled(({ ...rest }) => (
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

export const ToolbarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;

  ${props => props.theme.mixins.toolbar}
`;

export const StyledContent = styled.main`
  flex-grow: 1;
  height: '100vh';
  overflow: 'auto';
`;

export const StyledContainer = styled.div<ContainerProps>`
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
`;

export const AppBarSpacer = styled.div`
  ${props => props.theme.mixins.toolbar}
`;
