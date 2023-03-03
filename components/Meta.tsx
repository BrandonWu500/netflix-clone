import Head from 'next/head';

const Meta = ({
  title = 'Netflix Clone',
  keywords = 'streaming service, movies, tv shows',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit voluptate ex nihil, saepe perspiciatis.',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};
export default Meta;
