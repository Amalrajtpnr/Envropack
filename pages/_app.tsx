import LoadingContextProvider from "../contexts/LoadingContexts";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingContextProvider>
      <Component {...pageProps} />
    </LoadingContextProvider>
  );
}
