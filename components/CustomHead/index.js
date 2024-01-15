import React from "react";
import Head from "next/head";
import data from "../../data/portfolio.json";

const CustomHead = ({}) => {
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <link rel="icon" type="image/x-icon" href="/images/icon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="/images/icon.png" />
      </Head>
    </>
  );
};

export default CustomHead;
