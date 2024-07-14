const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const os = require('os');

const processor = (call) => {
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Check the available RAM
    const availableRam = os.totalmem();

    // Calculate the number of worker processes to fork
    //const numCPUsToUse = Math.min(numCPUs, Math.ceil(numCPUs * (80 / 100)));
    let numCPUsToUse = 1
    // Set the maximum memory usage for each worker process to 80% of the available RAM
    const ramPerCPUAuto = Math.floor((80 / 100 * availableRam) / numCPUsToUse);

    // Fork workers
    for (let i = 0; i < numCPUsToUse; i++) {
      const worker = cluster.fork();
      worker.execArgv = [`--max-old-space-size=${ramPerCPUAuto}`];
    }

    // Listen for dying workers
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    // Worker process
    console.log(`Worker ${process.pid} started`);

    // Run your Node.js code here
    call();
  }
};

// let count = 0;

// processor(() => {
//   setInterval(() => {
//     console.log(count);
//     count++;
//   }, 1/5);
// });

module.exports = { processor };