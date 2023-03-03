import { slides } from '@/data';
import sliderStyles from '@/styles/Slider.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useRef, useState } from 'react';
import Slide, { SlideType } from './Slide';

type SliderProps = {
  slides: SlideType[];
  title: string;
};

const Slider = ({ slides, title }: SliderProps) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [maxSlides, setMaxSlides] = useState(5);

  useEffect(() => {
    if (!slidesRef.current) {
      return;
    }
    const calcMaxSlides = () => {
      const { innerWidth } = window;
      const maxSlideCount = Math.floor(innerWidth / 350);
      setMaxSlides(maxSlideCount);
    };
    calcMaxSlides();
  }, []);

  const moveSlider = (direction: string) => {
    if (!slidesRef.current) {
      return;
    }
    let distance = slidesRef.current?.getBoundingClientRect().x - 50;
    /* console.log(distance); */
    setHasMoved(true);
    if (direction === 'left') {
      if (slideIdx <= 0) {
        // edge case
        const setsOfSlides = Math.floor(slides.length / maxSlides);
        setSlideIdx(setsOfSlides);
        slidesRef.current.style.transform = `translateX(calc(${
          -300 * (slides.length - maxSlides) + distance
        }px - 1rem * ${slides.length - maxSlides}))`;
      } else {
        slidesRef.current.style.transform = `translateX(calc(${
          300 * maxSlides + distance
        }px + 1rem * ${maxSlides}))`;
        setSlideIdx(slideIdx - 1);
      }
    } else if (direction === 'right') {
      if ((slideIdx + 1) * maxSlides >= slides.length) {
        // edge case
        setSlideIdx(0);
        slidesRef.current.style.transform = `translateX(0)`;
      } else {
        slidesRef.current.style.transform = `translateX(calc((${
          -300 * maxSlides + distance
        }px - 1rem * ${maxSlides}))`;
        setSlideIdx(slideIdx + 1);
      }
    }
  };
  return (
    <div className={sliderStyles.container}>
      <h2>{title}</h2>
      <div className={sliderStyles.carousel}>
        {hasMoved && (
          <button
            className={sliderStyles.left}
            onClick={() => moveSlider('left')}
          >
            <ArrowBackIosIcon fontSize="large" />
          </button>
        )}
        <button
          className={sliderStyles.right}
          onClick={() => moveSlider('right')}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </button>
        <div className={sliderStyles.slides} ref={slidesRef}>
          {slides.map((slide, slideIdx) => (
            <Slide key={slideIdx} slide={slide} maxSlides={maxSlides} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
