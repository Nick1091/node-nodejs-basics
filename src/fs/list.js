import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const files = path.join(__dirname, 'files');

export const list = async () => {
    try {
        const filesArray = await fs.readdir(files)
        console.log(filesArray)
    } catch (error) {
        console.error('FS operation failed')
    }
};

list();
