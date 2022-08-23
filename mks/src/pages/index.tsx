import Head from "next/head";
import React from "react";
import Products from "../components/products";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>MKS - Sistemas</title>
      </Head>
      <Products />
    </React.Fragment>
  );
}
