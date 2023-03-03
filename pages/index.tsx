import Featured from '@/components/Featured';
import { SlideType } from '@/components/Slide';
import Slider from '@/components/Slider';
import { server } from '@/config';
import homeStyles from '@/styles/Home.module.scss';

type HomeProps = {
  slides: SlideType[];
};

export default function Home({ slides }: HomeProps) {
  return (
    <div className={homeStyles.container}>
      <Featured />
      <Slider slides={slides} title="Trending Now" />
      <Slider slides={slides} title="My List" />
      <Slider slides={slides} title="New Releases" />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${server}/api/slides`);
    const slides = await res.json();
    return {
      props: {
        slides,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
