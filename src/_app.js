import { Toaster } from 'react-hot-toast';
import "../styles/gobals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}

export default MyApp;