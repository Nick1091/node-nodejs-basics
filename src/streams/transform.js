import { Transform, pipeline } from "stream";
const readable = process.stdin;
const writable = process.stdout;

export const transform = async () => {
    const transform = new Transform({
        transform(chunk, _, callback) {
            const reverseChunk = chunk.toString().trim().split('').reverse().join('');
            this.push(reverseChunk + '\n');
            callback();
        }
    })
    readable.pipe(transform).pipe(writable);
};

transform();
