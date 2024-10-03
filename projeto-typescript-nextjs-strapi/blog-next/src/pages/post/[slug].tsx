import { Post } from "@/containers/Post";
import { countAllPosts } from "@/data/posts/count-all-posts";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPosts } from "@/data/posts/getl-posts";
import { PostData } from "@/domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next/types";

export type DynamicPostProps = {
  post: PostData
}

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />
};

export default DynamicPost;


export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts(ctx.params.slug);

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};
