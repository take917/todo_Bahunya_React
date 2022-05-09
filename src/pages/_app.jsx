import { Header } from "src/components/Header";
import "src/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />;
      </main>
    </>
  );
};

export default MyApp;
