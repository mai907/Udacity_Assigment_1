import express from 'express';

import { resizingImage } from '../../utils/images';

const imageRouter = express.Router();

imageRouter.get('/', async (req, res) => {

  if (!req.query.filename) {
    return res.status(400).send('Please provide a filename');
  }

  const outputFile = await resizingImage(
    req.query.filename as string,
    Number(req.query.width),
    Number(req.query.height)
  );

  res.sendFile(outputFile);
});

export default imageRouter;
