import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Contact } from "../../types/type";

export const getStaticProps = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contacts: data },
  };
};

interface Props {
  contacts: Contact[];
}
const Contacts = ({ contacts }: Props) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <h1>Contacts list:</h1>
      <ul>
        {contacts &&
          contacts.map((contact) => (
            <Link href={`contacts/${contact.id}`} key={contact.id}>
              <li>{contact.name}</li>
            </Link>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
