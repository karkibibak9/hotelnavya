import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
  <Fragment>
    <Header/>
      <Component {...pageProps} />
  </Fragment>
  )
}

export default MyApp
