/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import Default from "../layouts/default";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="layouts-ctn">
      <Default>
        <Component {...pageProps} />
      </Default>
    </div>
  );
}

export default MyApp;
