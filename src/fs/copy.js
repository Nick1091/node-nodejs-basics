import fs, { stat } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files_copy');

export const copy = async () => {
    try{
        await stat(files, { flag: 'wx' })
        await fs.mkdir(filesCopy, { flag: 'wx' }); 
        const data = await fs.readdir(files, {withFileTypes: true })
        data.forEach(async(file) => {
            await fs.copyFile((`${files}/${file.name}`), (`${filesCopy}/${file.name}`));
        });             
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
copy();
