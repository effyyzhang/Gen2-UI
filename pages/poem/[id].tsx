import NextLink from "next/link";
import { Alert } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import(`../../components/Card`));
import useSWR from "swr";
import { useRouter } from "next/router";
import poem from "../api/poem/[id]";
type Data = {
  id: string;
  poem: string;
};
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Yo that's Not OK!!!");
  }
  const data: Data = await res.json();
  return data;
};

const PoemData = () => {
  const router = useRouter();
  const { id } = router.query;
  const result = useSWR(`/api/poem/${id}`, fetcher);
  const data: Data = result.data;
  const error: Error = result.error;

  if (error) {
    return <Alert status="error">Loading failed: {error.message}</Alert>;
  }

  if (!data) {
    return <Alert status="info">Loading...</Alert>;
  }
  return <Card props={data} />;
};

const PoemPage = () => {
  return <PoemData />;
};

export default PoemPage;
