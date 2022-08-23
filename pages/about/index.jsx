import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
export default function About() {
  return (
    <Layout>
      <Head>
        <title>About us</title>
      </Head>
      <h1>About us</h1>
      <Image
        src={"/images/react.webp"}
        width={144}
        height={144}
        alt="React logo"
      />
      <Link href={"/"}>
        <a>Back Home</a>
      </Link>
    </Layout>
  );
}
