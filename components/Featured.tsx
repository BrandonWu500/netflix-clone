import featuredStyles from '@/styles/Featured.module.scss';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Featured = () => {
  return (
    <div className={featuredStyles.container}>
      <div className={featuredStyles.textContainer}>
        <div className={featuredStyles.group}>
          <Image src="/images/netflix-logo.png" alt="" width={48} height={48} />
          MOVIE
        </div>
        <h1>MOVIE TITLE</h1>
        <div className={featuredStyles.group}>
          <div className={featuredStyles.top10}>
            <p>TOP</p> <p>10</p>
          </div>
          <h2>#3 in Movies Today</h2>
        </div>
        <p className={featuredStyles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo id
          saepe quod doloremque possimus sit blanditiis? Vel excepturi explicabo
          sed!
        </p>
        <div className={featuredStyles.btns}>
          <button className={featuredStyles.play}>
            <PlayArrowIcon color="inherit" fontSize="large" /> Play
          </button>
          <button className={featuredStyles.info}>
            <InfoIcon color="inherit" fontSize="large" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
