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
    </Head>
  );
};
export default Meta;
