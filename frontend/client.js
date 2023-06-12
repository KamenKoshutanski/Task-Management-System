const express = require('express');

const HOST = 'frontend';
const PORT = 4040;

const app = express();
const http = require('http').createServer(app);

app.use(express.json());
app.use(express.static('./'));

http.listen(PORT, () => {
    console.log(`\x1b[36m`);
    console.log(`    \x1b[36m╭────────────────────────────────────────╮`);
    console.log(`    \x1b[36m│      \x1b[31m> TaskManager Started <      \x1b[36m│`);
    console.log(`    \x1b[36m│    \x1b[37m           Frontend                 \x1b[36m│`);
    console.log(`    \x1b[36m│    \x1b[37m                                    \x1b[36m│`);
    console.log(`    \x1b[36m│    \x1b[37m         ${HOST}:${PORT}              \x1b[36m│`);
    console.log(`    \x1b[36m╰────────────────────────────────────────╯`);
    console.log(`\x1b[0m`);
}).on('error', (error) => {
    console.error('\x1b[31mERROR: \x1b[37mFailed to start server:', error.message);
    process.exit(1);
});

process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Gracefully shutting down...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal. Gracefully shutting down...');
    process.exit(0);
});