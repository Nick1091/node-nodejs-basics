import { writeFile } from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, 'files', 'fresh.txt')

const isCreateFile = async () => {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

export const create = async () => {
    try{
        if(!await isCreateFile()){
            throw new Error('FS operation failed');
        } else {
            writeFile(filePath, 'I am fresh and young', { flag: 'wx' }, (err) => {
                if(err){ 
                    throw new Error('FS operation failed'); 
                }
            }) 
        }
    } catch(err) { 
        console.error(err.message) 
    }
};

create();
