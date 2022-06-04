import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createUnzip } from "zlib";
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileZip = path.join(__dirname, 'files', 'fileToCompress.txt');
const fileToZip = path.join(__dirname, 'files', 'archive.gz');

export const decompress = async () => {
    const UnzipZip = createUnzip();
    const rs = createReadStream(fileToZip);
    const ws = createWriteStream(fileZip);

    return pipeline(rs, UnzipZip, ws)
        .then(() => {
            console.log('Success compress');
        })
        .catch((error) => {
            console.log(error.message);
        });
};

decompress();
