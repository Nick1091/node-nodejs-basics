import { createReadStream } from "fs";

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
const rS = createReadStream(fileToRead);
export const read = async () => {
    try {
        rS.on('data', (chunk) => {
            process.stdout.write(chunk);
        })
    } catch (err) {
        console.log(err)
    }
}

read();
