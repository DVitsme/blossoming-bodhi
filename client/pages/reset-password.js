import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context';
import { LockClosedIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import { authHandlePasswordReset } from '../lib/firebase';

export default function ResetPassword() {
  const router = useRouter();
  const { state } = useContext(Context);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // user is is auth'd should not use this page.
    if (state.user !== null) {
      toast.warn('cannot be accessed while logged in');
      router.push('/');
    }
  }, [state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        url: process.env.NEXT_PUBLIC_PASSWORD_RESET,
        handleCodeInApp: true
      };
      await authHandlePasswordReset(email, config);
      setEmail('');
      setLoading(false);
      toast.success('Check your email for password reset link');
      router.push('/signin');
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 py-12 lg:pb-60 sm:pb-40">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            To get started{' '}
            <span className="font-medium text-indigo-600">
              enter your username below
            </span>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// <div>
//   <label htmlFor="password" className="sr-only">
//     Password
//   </label>
//   <input
//     id="password"
//     name="password"
//     type="password"
//     autoComplete="current-password"
//     required
//     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//     placeholder="Password"
//   />
// </div>;
