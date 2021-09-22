import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {
  RiFacebookCircleFill,
  RiGoogleFill,
  RiTwitterFill
} from 'react-icons/ri';

import { authSignInEmail } from '../lib/firebase';
import { Context } from '../context';
import { handleLogInSocial } from '../utils/handleLogInSocial';
import Loading from '../utils/loading';

export default function SignIn() {
  const router = useRouter();
  const { state } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  /*
   * THIS SUCKS i would rather redirect on the server CHANGE ME!!
   * also use effect sucks cause state.user === null on render
   */
  if (state.user !== null) {
    router.push('/dashboard');
  }
  /*
   * THIS SUCKS i would rather redirect on the sever CHANGE ME!!
   */
  useEffect(() => {
    // query example: /signin?err=Im+a+test
    if (router.query.err) {
      toast.error(router.query.err);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const logedIn = await authSignInEmail(email, password);
      toast.success(`Welcome Back ${logedIn.user.displayName}`);
      setLoading(false);
      router.push('/dashboard');
    } catch (err) {
      console.error(`Error Login Email - ${err}`);
      setLoading(false);
      toast.error(err.message);
    }
  };

  const handleLogInSocialIcon = async (type) => {
    try {
      const logedIn = await handleLogInSocial(type);
      console.log(state);
      toast.success(`Welcome Back ${logedIn.user.displayName}`);
      router.push('/dashboard');
    } catch (err) {
      console.error(`Error Login Google - ${err}`);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl capitalize font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or start your journey by{' '}
          <Link href="/signup">
            <a className="font-medium text-indigo-600 hover:text-indigo-500">
              Signing Up
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/reset-password">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? (
                  <Loading color="#FFF" height={30} width={30} />
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div onClick={() => handleLogInSocialIcon('facebook')}>
                <a className="w-full inline-flex cursor-pointer justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Sign in with Facebook</span>
                  <RiFacebookCircleFill
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                  />
                </a>
              </div>

              <div onClick={() => handleLogInSocialIcon('twitter')}>
                <a
                  href="#"
                  className="w-full inline-flex cursor-pointer justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <RiTwitterFill
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                  />
                </a>
              </div>

              <div onClick={() => handleLogInSocialIcon('google')}>
                <a className="w-full inline-flex cursor-pointer justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Sign in with Google</span>
                  <RiGoogleFill
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
