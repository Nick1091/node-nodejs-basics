import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')
export const read = async () => {
    try {
        await fs.access(fileToRead);
        const file = await fs.readFile(fileToRead)
        console.log(file.toString())
    } catch (error) {
        console.log('FS operation failed')
    }
};

read();
