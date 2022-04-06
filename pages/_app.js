import Navbar from '../components/navbar';
import '../styles/globals.css';
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
