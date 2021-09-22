import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import {
  RiFacebookCircleFill,
  RiGoogleFill,
  RiTwitterFill
} from 'react-icons/ri';

import { handleLogInSocial } from '../utils/handleLogInSocial';
import { authSignUpEmail } from '../lib/firebase';
import Loading from '../utils/loading';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    try {
      const createdUser = await authSignUpEmail(user);
      console.log('sign up', createdUser);
      setLoading(true);
      if (!!createdUser.user.displayName) {
        setLoading(false);
        toast.success(`Welcome ${createdUser.user.displayName}`);
        router.push('/dashboard');
      }
    } catch (err) {
      toast.error(err.message);
      console.log(`Sign Up error - Email: ${err}`);
    }
  };

  return (
    <div className="bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-16">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create Your Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We belive in data privacy{' '}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                and will never sell your info
              </a>
            </p>
          </div>
          {/* Log in with Social Media */}
          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Sign up with
                </p>

                <div className="mt-1 grid grid-cols-3 gap-3">
                  <div onClick={() => handleLogInSocial('facebook')}>
                    <a className="w-full inline-flex justify-center py-2 px-4 cursor-pointer  border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Sign in with Facebook</span>
                      <RiFacebookCircleFill
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                      />
                    </a>
                  </div>

                  <div onClick={() => handleLogInSocial('twitter ')}>
                    <a className="w-full inline-flex justify-center py-2 px-4 cursor-pointer  border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span className="sr-only">Sign in with Twitter</span>
                      <RiTwitterFill
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                      />
                    </a>
                  </div>

                  <div onClick={() => handleLogInSocial('google')}>
                    <a className="w-full inline-flex justify-center py-2 px-4 border cursor-pointer border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
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

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            {/* Log in Form */}
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
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
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
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
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border bord<er-transparent mb-16 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loading color="#FFF" height={30} width={30} />
                    ) : (
                      'Sign Up '
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
