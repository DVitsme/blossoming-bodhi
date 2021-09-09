import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useContext } from 'react';
import { Context } from '.';
import { axiosAuth } from '../actions/axios';
import { firebase, auth } from '../lib/firebase';
import { setCookie, destroyCookie } from 'nookies';

export const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        // set token to cookie
        const { token } = await user.getIdTokenResult();
        // console.log('onAuthStateChange User', user);
        // console.log('onAuthStateChange token', token);
        destroyCookie(null, 'token'); // kill the last token
        setCookie(null, 'token', token, {}); // create a new cookie with new token - order is {context, name, value, options}

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
        destroyCookie(null, 'token');
        setCookie(null, 'token', '', {});
      }
    });
  }, []);
  return <>{children}</>;
};
