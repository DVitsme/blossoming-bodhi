import { useContext } from 'react';
import Head from 'next/head';

import { Context } from '../context';
import { auth, authSignOut } from '../lib/firebase';

export default function Home() {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Hi there</h1>

        <button onClick={() => authSignOut()}>Sign Out</button>
      </main>
    </div>
  );
}
