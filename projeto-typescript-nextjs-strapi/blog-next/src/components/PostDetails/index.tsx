import { formatDate } from "@/utils/format-date";
import { Container } from "./styled";
import { Date } from "../Date";

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} em {category}
    </Container>
  );
};
