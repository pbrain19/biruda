import * as React from 'react';

export interface ContextProps {
  User?: firebase.User | null;
}

// We want the authed user to be visible across the entire app.
export const AppContext = React.createContext<ContextProps>({
  User: null,
});
