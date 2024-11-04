import { readFileSync } from 'fs';
import path from 'path';

export default function (filePath) {
    if (path.extname(filePath) !== '.svg') {
      throw new Error('svg filter requires .svg file extension');
    }

    const data = readFileSync(filePath, function(err, contents) {
        if (err) {
          throw new Error(err)  ;
        }

        return contents
    });

    return data.toString('utf8');
}
