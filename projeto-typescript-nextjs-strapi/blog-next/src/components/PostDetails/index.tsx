import { formatDate } from "@/utils/format-date";
import { Container } from "./styled";
import { Date } from "../Date";
import Link from "next/link";

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link
        as={`/post/page/1/${category.toLowerCase}`}
        href='/post/page/[...param]'
      >
        <a>{category}</a>
      </Link>
    </Container>
  );
};
