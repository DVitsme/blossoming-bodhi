import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useContext } from 'react';
import { Context } from '.';
import { axiosAuth } from '../actions/axios';
import { firebase, auth } from '../lib/firebase';

export const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { token } = await user.getIdTokenResult();
        // see ../actions/axios to endpoints and headers being set
        const res = await axiosAuth.post('/current-user', {
          /* empty req.body */
        });
        // confirm the token is correct
        dispatch({
          type: 'LOGIN',
          payload: await res.data
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
