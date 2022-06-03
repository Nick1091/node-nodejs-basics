import fs, { access } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const files = path.join(__dirname, 'files');

const isFiles = async () => {
    try {
        await access(files);
        return true;
    } catch {
        return false;
    }
}
export const list = async () => {
    try {
        if(await isFiles()){
            const filesArray = await fs.readdir(files)
            console.log(filesArray)
        } else {
            throw new Error('FS operation failed')
        }
    } catch (error) {
        console.log(error.message)
    }
};

list();
