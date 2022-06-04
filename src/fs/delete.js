import { unlink, access } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

export const remove = async () => {
    const isFiles = async () => {
        try {
            await access(filePath);
            return true;
        } catch {
            return false;
        }
    }
    try{
        if(await isFiles()){
            await unlink(filePath);
        }
        else{
            throw new Error('FS operation failed')
        }
    } catch (err) {
        console.log(err.message);
    }
};

remove();
