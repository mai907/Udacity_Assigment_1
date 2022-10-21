import express from 'express';
import * as fs from 'fs';
import path from 'path';

const validImage = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.query.filename) {
    return res.status(400).send('Please provide a filename');
  }

  const imagesFolder = path.resolve(`images/full/${req.query.filename}.jpg`);
  fs.access(imagesFolder, fs.constants.F_OK, function (err: any) {
    err ? res.status(400).send('Please provide a valid filename') : next();
  });
};

const validWidthandHeight = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.query.width || !req.query.height) {
    return next();
  }
  if (
    isNaN(req.query.width as unknown as number) ||
    isNaN(req.query.height as unknown as number)
  ) {
    return res.status(400).send('Please provide a valid width and height');
  }
  next();
};

export { validImage, validWidthandHeight };
