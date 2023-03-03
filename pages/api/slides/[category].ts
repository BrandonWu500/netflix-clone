import { myListSlides, newSlides, trendingSlides } from '@/data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  if (category === 'trending') {
    const moreSlides = Array(5)
      .fill([...trendingSlides])
      .flat();
    res.status(200).json(moreSlides);
  } else if (category === 'myList') {
    const moreSlides = Array(5)
      .fill([...myListSlides])
      .flat();
    res.status(200).json(moreSlides);
  } else if (category === 'new') {
    const moreSlides = Array(5)
      .fill([...newSlides])
      .flat();
    res.status(200).json(moreSlides);
  }
}
