import { PaginationData } from "@/domain/posts/pagination";
import { Container, NextLink, PreviousLink } from "./styled"
import Link from "next/link";

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage = 1,
  numberOfPosts = 0,
  category = '',
  previousPage = 1,
  postsPerPage = 6,
}: PaginationData) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href='/post/page/[...param]'>
            <a>Previous</a>
          </Link>
        </PreviousLink>)}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href='/post/page/[...param]'>
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
