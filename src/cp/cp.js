import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { pipeline } from "stream"
import  { fork, spawn } from 'child_process';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const scriptFile = path.join(__dirname, 'files/script.js');

export const spawnChildProcess = async (args) => {
    const cp = fork(scriptFile, args, { silent: true });
    cp.on('exit', (code) => {
        console.log(`Exit childProcess with code ${code}`);
    })
    cp.stderr.on('data', (error) => {
        console.info(`error: ${error}`);
    })
    pipeline(
        cp.stdout,
        process.stdout,
        (err) => {
            console.log(err);
        }
    )
    cp.stdout.on('data', (data) => {
        console.log(`Received chunk stdout: ${data}`);
    });
    pipeline(
        process.stdin,
        cp.stdin,
        (err) => {
            console.log(err);
        }
    )
};

await spawnChildProcess(['asf', 'asd', 'CLOSE', 'qwe'])