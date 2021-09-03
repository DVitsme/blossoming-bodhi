import { ToastContainer } from 'react-toastify';

import { Provider } from '../context';
import Navigation from '../components/navigation/index';
import Footer from '../components/Footer';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseAuthState } from '../context/FirebaseAuthState';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <FirebaseAuthState>
        <Navigation />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </FirebaseAuthState>
    </Provider>
  );
}

export default MyApp;
