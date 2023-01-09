import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { Contact } from "../../types/type";

interface Props {
  contact: Contact;
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  const data: Contact[] = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contact: data },
  };
};

const Contact = ({ contact }: Props) => {
  return (
    <>
      <Head>Contact</Head>
      <ContactInfo contact={contact} />
    </>
  );
};
export default Contact;
