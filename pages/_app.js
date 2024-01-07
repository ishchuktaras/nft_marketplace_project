import "../styles/globals.css";

//INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
