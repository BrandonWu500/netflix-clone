import { trendingSlides } from '@/data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const moreSlides = Array(5)
    .fill([...trendingSlides])
    .flat();
  res.status(200).json(moreSlides);
}
