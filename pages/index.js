import Home from "../components/home";
import Layout from "../components/layout";
import Stats from "../components/stats";
import Head from "next/head";
import FirstContent from "../components/firstcontent";
import SecondContent from "../components/secondcontent";
import Clients from "../components/clients";
import Faq from "../components/faq";
import Contact from "../components/contact";
export default function Main({}) {
  return (
    <>
      {" "}
      <Head>
        <title>Main Page</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Layout>
        <Home />
        <Stats />
        <FirstContent />
        <SecondContent />
        <Clients />
        <Faq />
        <Contact />
      </Layout>
    </>
  );
}
