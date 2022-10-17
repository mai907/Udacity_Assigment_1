import * as fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const resizingImage = async (
  filename: string,
  width?: number,
  height?: number
): Promise<string> => {
  const fileBeforeResizing: string = path.resolve(
    `src/images/full/${filename}.jpg`
  );
  const fileAfterResizing: string = path.resolve(
    `src/images/thumb/${filename}_thumb.jpg`
  );

  if (!width || !height) {
    return fileBeforeResizing;
  }

  const inputBuffer: Buffer = await fs.readFileSync(fileBeforeResizing);

  await sharp(inputBuffer).resize(width, height).toFile(fileAfterResizing);

  return fileAfterResizing;
};

export { resizingImage };
