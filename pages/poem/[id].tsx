import NextLink from "next/link";
import { Alert } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import(`../../components/Card`));
import useSWR from "swr";
import { useRouter } from "next/router";
import { PoemData } from "../../lib/types";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Yo that's Not OK!!!");
  }
  const data: PoemData = await res.json();
  return data;
};

const PoemComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  const result = useSWR(`/api/poem/${id}`, fetcher);
  const data: PoemData = result.data;
  const error: Error = result.error;

  if (error) {
    return <Alert status="error">Loading failed: {error.message}</Alert>;
  }

  if (!data) {
    return <Alert status="info">Loading...</Alert>;
  }
  return <Card data={data} />;
};

const PoemPage = () => {
  return <PoemComponent />;
};

export default PoemPage;
