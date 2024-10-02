import { useRouter } from "next/router";

const Username = () => {
  const router = useRouter();
  return <h1>Username: {router.query.username}</h1>;
};

export default Username;
