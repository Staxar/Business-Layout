import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
