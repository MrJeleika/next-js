import { useRouter } from "next/router";
import Heading from "../components/Heading";
import { useEffect } from "react";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <h2>Something went wrong</h2>
    </>
  );
};
export default Error;
