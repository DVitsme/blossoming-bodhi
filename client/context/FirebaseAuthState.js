import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useContext } from 'react';
import { Context } from '.';
import { firebase, auth } from '../lib/firebase';

export const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({
          type: 'LOGIN',
          payload: user
        });
      } else {
        // User is signed out
        dispatch({
          type: 'LOGOUT'
        });
      }
    });
  }, []);
  return <>{children}</>;
};
