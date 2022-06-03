import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import './files/c.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url)
const random = Math.random();
export const unknownObject =  random > 0.5 ? require('./files/a.json') : require('./files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
