import { createWriteStream } from "fs";

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt')
const wS = createWriteStream(fileToWrite);
export const write = async () => {
    try {
        process.stdin.on('data', (chunk) => {
            wS.write(chunk);
        })
    } catch (err) {
        console.log(err)
    } 
};

write();
