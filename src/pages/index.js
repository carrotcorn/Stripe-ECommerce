import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

export default () => {
  const { title, lang, description, ogImg } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        {/* <meta name="image" property="og:image" content={ogImg} /> */}
      </Helmet>
      <App />
    </>
  );
};
