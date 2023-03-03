import hoverCardStyles from '@/styles/HoverCard.module.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { SlideType } from './Slide';
import Link from 'next/link';

type HoverCardProps = {
  slide: SlideType;
};

const HoverCard = ({ slide }: HoverCardProps) => {
  return (
    <div className={hoverCardStyles.container}>
      <div className={hoverCardStyles.imgContainer}>
        <Image src={slide.img} alt="" fill />
      </div>
      <section className={hoverCardStyles.textContainer}>
        <div className={hoverCardStyles.btns}>
          <div className={hoverCardStyles.left}>
            <Link href="/watch/2">
              <button>
                <PlayArrowIcon />
              </button>
            </Link>
            <button>
              <AddIcon />
            </button>
            <button>
              <ThumbUpIcon />
            </button>
          </div>
          <div className={hoverCardStyles.right}>
            <button>
              <ExpandMoreIcon />
            </button>
          </div>
        </div>
        <div className={hoverCardStyles.info}>
          {slide.match >= 90 && (
            <p className={hoverCardStyles.success}>{`${slide.match}% Match`}</p>
          )}
          <p className={hoverCardStyles.tvRating}>{slide.tvRating}</p>
          <p className={hoverCardStyles.time}>{slide.duration}</p>
          {slide.hd && <small className={hoverCardStyles.hd}>HD</small>}
        </div>
        <div className={hoverCardStyles.genre}>
          {slide.genre.map((cat, idx) => (
            <p key={idx}>{cat}</p>
          ))}
        </div>
      </section>
    </div>
  );
};
export default HoverCard;
