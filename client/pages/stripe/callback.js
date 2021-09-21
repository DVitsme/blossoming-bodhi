import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { axiosAuth } from '../../actions/axios';
import { Context } from '../../context';

const StripeCallback = () => {
  const { state } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // axiosAuth.post('/api/get-account')
    }
  }, [user]);
  console.log('I ran second', router);

  return (
    <div>
      <h1>Im the callback page</h1>
    </div>
  );
};

export default StripeCallback;
