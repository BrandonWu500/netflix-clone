import slideStyles from '@/styles/Slide.module.scss';
import Image from 'next/image';
import HoverCard from './HoverCard';

export type SlideType = {
  title: string;
  img: string;
  netflix: boolean;
  top10: boolean;
  newSeason: boolean;
  newEpisode: boolean;
  tvRating: string;
  genre: string[];
  hd: boolean;
  duration: string;
  match: number;
};

type SlideProps = {
  slide: SlideType;
  maxSlides: number;
};

const Slide = ({ slide, maxSlides }: SlideProps) => {
  return (
    <div
      className={slideStyles.container}
      style={{
        maxWidth: `calc(100% / ${maxSlides})`,
        flex: `0 0 calc(100% / ${maxSlides})`,
      }}
    >
      <Image src={slide.img} alt="" fill className={slideStyles.bgImg} />
      <div className={slideStyles.hoverCard}>
        <HoverCard slide={slide} />
      </div>
      <h3>{slide.title}</h3>
      {slide.netflix && (
        <div>
          <Image
            src="/images/netflix-logo.png"
            alt=""
            width={32}
            height={32}
            className={slideStyles.logo}
          />
        </div>
      )}
      {slide.top10 && (
        <div className={slideStyles.top10}>
          <p>TOP</p>
          <p>
            <strong>10</strong>
          </p>
        </div>
      )}
      {slide.newSeason && (
        <div className={slideStyles.newSeason}>
          <p>New Season</p>
        </div>
      )}
      {slide.newEpisode && (
        <div className={slideStyles.newEpisode}>
          <div className={slideStyles.group}>
            <p>New Episode</p>
            <p>Watch Now</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Slide;
