import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { Contact, Post } from "../../types/type";
import PostInfo from "../../components/PostInfo";

interface Props {
  post: Post;
}

export const getStaticPaths = async () => {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }: any) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};

const Post = ({ post }: Props) => {
  return (
    <>
      <Head>Post:</Head>
      <PostInfo post={post} />
    </>
  );
};
export default Post;
