import { createHash } from 'crypto';
import fs from 'fs/promises';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileToRead = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

export const calculateHash = async () => {
    const file = await fs.readFile(fileToRead)

    const hash = (string) => {
        return createHash('sha256').update(string).digest('hex');
    }

    console.log(hash(file));
};

calculateHash()
