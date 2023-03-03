import { server } from '@/config';
import watchStyles from '@/styles/Watch.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export type VideoType = {
  id: number;
  vid: string;
};

type WatchProps = {
  video: VideoType;
};

const watch = ({ video }: WatchProps) => {
  return (
    <div className={watchStyles.container}>
      <Link href="/" className={watchStyles.link}>
        <ArrowBackIcon fontSize="large" />
        <span>Home</span>
      </Link>
      <video
        src={video.vid}
        controls
        autoPlay
        className={watchStyles.video}
      ></video>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const res = await fetch(`${server}/api/watch/${context.params.id}`);
  const video = await res.json();
  return {
    props: {
      video,
    },
  };
};

export default watch;
