import Head from 'next/head';
import { Header } from '@/components/Header';
import { AllPostLinks, Category, Container } from './styles';
import { PostData } from '@/domain/posts/post';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';
import { PaginationData } from '@/domain/posts/pagination';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';
import React from 'react';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({ posts, category, pagination }: HomePageProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}`  : SITE_NAME}
          {pagination?.nextPage && ` - Página ${pagination.nextPage -1}`}
        </title>
        <meta name="description" content="Este é meu blog." />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            cover={post.cover.formats.small.url}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </Container>
      <Pagination {...pagination} />
      {!pagination?.nextPage && (
        <Link href="/post/page/[...param]" as='/post/page/1' passHref >
          <AllPostLinks>Ver todos os posts</AllPostLinks>
        </Link>
      )}
    </MainContainer>
    <Footer />
    </>

  );
};
