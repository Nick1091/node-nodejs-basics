import fs, { access } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files_copy');

const isFiles = async () => {
    try {
        await access(files);
        return true;
    } catch {
        return false;
    }
}
const isCopyFile = async () => {
    try {
        await access(filesCopy);
        return true;
    } catch {
        return false;
    }
}
export const copy = async () => {
    try{
        if(!await isCopyFile() && await isFiles() ){
            // await stat(files, { flag: 'wx' })
            await fs.mkdir(filesCopy, { flag: 'wx' }); 
            const data = await fs.readdir(files, {withFileTypes: true })
            data.forEach(async(file) => {
                await fs.copyFile((`${files}/${file.name}`), (`${filesCopy}/${file.name}`));
            }); 
        }  else {
            throw new Error('FS operation failed');
        }          
    } catch (err) {
        console.log(err.message);
    }
};
copy();
