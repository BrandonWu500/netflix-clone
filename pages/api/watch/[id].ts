import { videos } from '@/data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const vid = videos.filter((vid) => vid.id.toString() === id);
  if (vid.length > 0) {
    res.status(200).json(vid[0]);
  } else {
    res.status(404).json({ message: `Video with id ${id} not found.` });
  }
}
