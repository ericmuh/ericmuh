import Head from "next/head";

function PageHead({ title }: { title: string }) {
  return (
    <Head>
      <title>Eric Muhwezi</title>
      <meta name="description" content="A personal website by Eric Muhwezi" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default PageHead;
