import fs, { access } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')
const isFiles = async () => {
    try {
        await access(fileToRead);
        return true;
    } catch {
        return false;
    }
}
export const read = async () => {
    try {
        if(await isFiles()){
            const file = await fs.readFile(fileToRead)
            console.log(file.toString())
        } else {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.log(error.message);
    }
};

read();
