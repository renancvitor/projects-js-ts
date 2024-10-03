import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostData } from "@/domain/posts/post"
import { Heading } from "../Heading";
import { PostCover } from "../PostCover";
import { PostDetails } from "../PostDetails";
import { PostContainer } from "../PostContainer";

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <PostDetails author={post.author.name} category={post.category.name} date={post.created_at} />
        <PostContainer content={post.content} />
      </MainContainer>
      <Footer />
    </>
  );
}
