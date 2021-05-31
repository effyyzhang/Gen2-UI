import { NextPage } from "next";
import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <h1>hello Gen 2</h1>
      <Link href="/about">About</Link>
    </>
  );
};

export default IndexPage;
