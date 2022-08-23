import "../styles/index.scss";
export default function App({ Component, pageProps: { ...pageProps } }) {
  return <Component {...pageProps} />;
}
