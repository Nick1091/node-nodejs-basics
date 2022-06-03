import { unlink, access } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

export const remove = async () => {
    try{
        await access(filePath);
        await unlink(filePath);
    } catch (err) {
        console.log(new Error('FS operation failed'))
    }
};

remove();
