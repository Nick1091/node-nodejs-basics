import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileZip = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileToZip = path.join(__dirname, 'files', 'archive.gz');

export const compress = async () => {
    const gzip = createGzip();
    const rs = createReadStream(fileZip);
    const ws = createWriteStream(fileToZip);

    return pipeline(rs, gzip, ws)
        .then(() => {
            console.log('Success compress');
        })
        .catch((error) => {
            console.log(error.message);
        });
};

compress();
