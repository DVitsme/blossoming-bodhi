import { Context } from '../../context';
import { useContext } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline';
import { authSignOut } from '../../lib/firebase';

const AuthMobile = () => {
  const { state, dispatch } = useContext(Context);
  if (state.user) {
    return <SignedIn user={state.user} />;
  }
  return (
    <div className="mt-6">
      <a
        href="#"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Sign up
      </a>
      <p className="mt-6 text-center text-base font-medium text-gray-500">
        Existing customer?{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">
          Sign in
        </a>
      </p>
    </div>
  );
};

const SignedIn = ({ user }) => {
  return (
    <div className="mt-4 pt-4 pb-3 border-t border-gray-200">
      <div className="flex items-center px-4 sm:px-6">
        <div className="flex-shrink-0">
          {user.photoURL ? (
            <img
              className="h-10 w-10 rounded-full"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <UserCircleIcon className="h-10 w-10 rounded-full text-gray-400 hover:text-gray-500 " />
          )}
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-800 capitalize">
            {user.name}
          </div>
          <div className="text-sm font-medium text-gray-500">{user.email}</div>
        </div>
        <button
          type="button"
          className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">View notifications</span>
          <span className="flex">Dashboard</span>
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <a
          onClick={() => {
            authSignOut(dispatch);
            router.push('/signin');
          }}
          className="w-full flex items-center cursor-pointer justify-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default AuthMobile;
