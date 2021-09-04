import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useContext } from 'react';
import { Context } from '.';
import { firebase, auth } from '../lib/firebase';

export const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { token } = await user.getIdTokenResult();
        const res = await axios.post(
          'http://localhost:8000/api/current-user',
          {
            /* empty req.body */
          },
          {
            headers: {
              token
            }
          }
        );
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
