import { useEffect, useContext } from 'react';

import { axiosAuth } from '../../actions/axios';
import { Context } from '../../context';
import Loading from '../../utils/loading';

const StripeCallback = () => {
  const {
    state: { user },
    dispatch
  } = useContext(Context);

  useEffect(() => {
    if (user) {
      axiosAuth
        .post('/get-account-status')
        .then((res) => {
          dispatch({
            type: 'LOGIN',
            payload: res.data
          });
          window.localStorage.setItem('user', JSON.stringify(res.data));
          window.location.href = '/dashboard/instructor';
        })
        .catch((err) => console.error('stripe update account err:', err));
    }
  }, [user]);

  return (
    <div className="h-screen flex align-middle">
      <Loading height={200} width={200} />
    </div>
  );
};

export default StripeCallback;
