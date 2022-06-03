import fs, { rename as renameFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const files = path.join(__dirname, 'files');

export const rename = async () => {
    const arrayFiles = await fs.readdir(files)
    if(arrayFiles){
        try{
            const initFile = arrayFiles.find((file) => file === 'wrongFilename.txt')
            const targetFile = arrayFiles.find((file) => file === 'properFilename.md')
            if ( !!initFile && targetFile === undefined){
                await renameFile(path.join(files,'wrongFilename.txt'), path.join(files,'properFilename.md'))
            } else {
                throw new Error('FS operation failed')
            }
        } catch (err) {
            console.log(err.message);
        }
    }
};

rename();
