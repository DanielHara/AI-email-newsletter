// Include the cluster module
import cluster from 'cluster';
import { cpus } from 'os'
import AWS from 'aws-sdk';
import express from 'express';
import bodyParser from 'body-parser';
import sendEmail from './send.tsx';

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    const cpuCount = cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
    AWS.config.region = process.env.REGION
    const app = express();
;
    app.use(bodyParser.urlencoded({ extended:false }));

    app.get('/', function(req, res) {
        res.send({
           page: 'main page'
        });
    });

    app.get('/send', function(req, res) {
        // TO-DO: treat failure of the send request
        sendEmail().then((data) => {
            res.send({
                status: 'Sucessfully sent',
                data
            });
        }).catch(() => {
            res.send({
                status: 'Some issue happened',
                data
            });
        })
    });

    const port = process.env.PORT || 3000;

    const server = app.listen(port, function () {
        console.log('Server running at http://127.0.0.1:' + port + '/');
    });
}