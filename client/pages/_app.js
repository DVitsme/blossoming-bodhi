import { ToastContainer } from 'react-toastify';

import { Provider } from '../context';
import Navigation from '../components/navigation/index';
import Footer from '../components/Footer';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navigation />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
