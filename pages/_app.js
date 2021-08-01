import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.scss';
import { Fragment } from 'react';
import Footer from '../components/footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {process.env.NODE_ENV == 'production'
        &&
        <MessengerCustomerChat
          pageId={process.env.FB_PAGE_ID}
          appId={process.env.FB_APP_ID}

          themeColor='#00c6ff'
        // themeColor='#ffafbd'
        // htmlRef="<REF_STRING>"
        />
      }

    </Fragment>
  )
}

export default MyApp
