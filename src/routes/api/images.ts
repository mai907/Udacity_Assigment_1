import express from 'express';
import {validImage, validWidthandHeight} from '../middleware/images';
import { resizingImage} from '../../utils/images';

const imageRouter = express.Router();
const middelware = [validImage,validWidthandHeight];

imageRouter.get('/',middelware, async (req: express.Request, res: express.Response):Promise<void> => {

  const outputFile = await resizingImage(
    req.query.filename as string,
    Number(req.query.width),
    Number(req.query.height)
  );

  res.sendFile(outputFile);
});

export default imageRouter;
