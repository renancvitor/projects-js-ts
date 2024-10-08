import { Post } from "@/containers/Post";
import { countAllPosts } from "@/data/posts/count-all-posts";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPosts } from "@/data/posts/getl-posts";
import { PostData } from "@/domain/posts/post";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import Error from 'next/error';
import React from "react";

export type DynamicPostProps = {
  post: PostData
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Página ainda carregando, por favor aguarde...</div>;
  }

  if (!post?.title) {
    return <Error statusCode={404} />;
  }

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
  const slug = ctx.params?.slug;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const posts = await getPosts(slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
    revalidate: 600,
  };
};
