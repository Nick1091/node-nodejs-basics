import { Worker, isMainThread } from "worker_threads"; 
import { cpus } from 'os';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const workerPath = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
        let number = 10;
        const arrWorkers = [];
        for(let i = 0; i < cpus().length; i++){
            arrWorkers.push(
                new Promise((resolve) => {
                    new Worker(workerPath, { workerData: number + i })
                    .on('message', result => {
                        resolve({ data: result, status: 'resolved'});
                    })
                    .on('error', error => {
                        resolve( { data: null, status: 'error'});
                    })                 
                })
            )
        }
        const result = await Promise.all(arrWorkers);
            console.log(result);
            return result;
    }
    await performCalculations()
