import Head from "next/head";
import { Contact } from "../types/type";
import Heading from "./Heading";

interface Props {
  contact: Contact;
}

const ContactInfo = ({ contact }: Props) => {
  if (!contact) return <Heading text="No contact with such id"></Heading>;
  return (
    <>
      <Heading text={contact.name}></Heading>
      <p>{contact.email}</p>
    </>
  );
};

export default ContactInfo;
