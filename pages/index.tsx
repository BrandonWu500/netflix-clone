import Featured from '@/components/Featured';
import { SlideType } from '@/components/Slide';
import Slider from '@/components/Slider';
import { server } from '@/config';
import homeStyles from '@/styles/Home.module.scss';

type HomeProps = {
  trendSlides: SlideType[];
  myListSlides: SlideType[];
  newSlides: SlideType[];
};

export default function Home({
  trendSlides,
  myListSlides,
  newSlides,
}: HomeProps) {
  return (
    <div className={homeStyles.container}>
      <Featured />
      <Slider slides={trendSlides} title="Trending Now" />
      <Slider slides={myListSlides} title="My List" />
      <Slider slides={newSlides} title="New Releases" />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const [trendRes, myListRes, newRes] = await Promise.all([
      fetch(`${server}/api/slides/trending`),
      fetch(`${server}/api/slides/myList`),
      fetch(`${server}/api/slides/new`),
    ]);
    const [trendSlides, myListSlides, newSlides] = await Promise.all([
      trendRes.json(),
      myListRes.json(),
      newRes.json(),
    ]);
    return {
      props: {
        trendSlides,
        myListSlides,
        newSlides,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
