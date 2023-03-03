import slideStyles from '@/styles/Slide.module.scss';
import Image from 'next/image';

export type SlideType = {
  title: string;
  img: string;
  netflix: boolean;
  top10: boolean;
  newSeason: boolean;
  newEpisode: boolean;
};

type SlideProps = {
  slide: SlideType;
  maxSlides: number;
};

const Slide = ({ slide, maxSlides }: SlideProps) => {
  return (
    <div className={slideStyles.container}>
      <Image src={slide.img} alt="" fill />

      <h3>{slide.title}</h3>
    </div>
  );
};
export default Slide;
