import * as fs from 'fs';
import path from 'path';
import { resizingImage } from '../../utils/images';

describe('check resize function works', function () {
  const expectedFilename = path.resolve(
    'src/images/thumb/palmtunnel_thumb.jpg'
  );
  it('return the original image path if only filename been provided', async function () {
    const result = await resizingImage('palmtunnel');
    expect(result).toEqual(path.resolve('src/images/full/palmtunnel.jpg'));
  });

  it('return the resized image path if filename, width and height been provided', async function () {
    const result = await resizingImage('palmtunnel', 300, 300);
    expect(result).toEqual(expectedFilename);
  });

  it('image after resizing exist on image/thumb folder', async function () {
    fs.access(expectedFilename, fs.constants.F_OK, function (err: any) {
      const result = err ? 'does not exist' : 'exists';
      expect(result).toEqual('exists');
    });
  });

  afterAll(function () {
    fs.unlink(expectedFilename, (err) => {
      if (err) throw err;
    });
  });
});
