import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const tempFolder = path.resolve(__dirname, '..', '..', 'temp');
const uploadsFolder = path.resolve(tempFolder, 'uploads');

export default {
  tempFolder,
  uploadsFolder,
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'temp'),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
