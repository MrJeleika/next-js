import Heading from "../../components/Heading";
import Head from "next/head";
import { Post } from "../../types/type";
import Link from "next/link";
import { GetStaticProps } from "next";

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Hello world" />
      <ul>
        {posts &&
          posts.map((post) => (
            <Link href={`posts/${post.id}`} key={post.id}>
              <li>{post.id}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
export default Posts;
