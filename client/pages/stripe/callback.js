import { useEffect, useContext } from 'react';

import { axiosAuth } from '../../actions/axios';
import { Context } from '../../context';
import Loading from '../../utils/loading';

const StripeCallback = () => {
  const { state } = useContext(Context);

  useEffect(() => {
    if (state.user) {
      axiosAuth.post('/get-account-status').then((res) => {
        console.log(res.data);
      });
    }
  }, [state.user]);

  return (
    <div className="h-screen flex align-middle">
      <Loading height={200} width={200} />
    </div>
  );
};

export default StripeCallback;
