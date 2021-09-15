import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Context } from '../context';
import { auth, authSignOut } from '../lib/firebase';
import HeroVideo from '../components/Hero/heroVideo';
import AlternatingFeatures from '../components/feature/alternatingFeatures';
import AboutPreview from '../components/testimonial/aboutPreview';
import FourByTwoGrid from '../components/feature/fourByTwoGrid';
import AboutStats from '../components/feature/stats';
import InlineSignUp from '../components/cta/inlineSignUp';

export default function Home() {
  const { state } = useContext(Context);
  console.log('im from the index', state);
  return (
    <main>
      <Head>
        <title>Blossoming Bodhi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroVideo />
      <AlternatingFeatures />
      <FourByTwoGrid />
      <AboutStats />
      <InlineSignUp />
    </main>
  );
}
