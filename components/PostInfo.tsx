import Head from "next/head";
import { Contact, Post } from "../types/type";
import Heading from "./Heading";

interface Props {
  post: Post;
}

const PostInfo = ({ post }: Props) => {
  if (!post) return <Heading text="No post with such id"></Heading>;
  return (
    <>
      <Heading text={post.title}></Heading>
      <p>{post.body}</p>
    </>
  );
};

export default PostInfo;
