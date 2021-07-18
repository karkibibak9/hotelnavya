import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';
import { Fragment } from 'react';
import Footer from '../components/footer';
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
