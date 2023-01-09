import Heading from "../components/Heading";
import s from "../styles/Home.module.css";
import Head from "next/head";
import { Social as SocialType } from "../types/type";
import Social from "../components/Social";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { socials: data },
  };
};

interface Props {
  socials: SocialType[];
}

const Home = ({ socials }: Props) => {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" />
      {socials &&
        socials.map((social) => <Social key={social.id} social={social} />)}
    </div>
  );
};
export default Home;
