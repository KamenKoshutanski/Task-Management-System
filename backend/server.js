const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.static(path.join('frontend')));

  app.get('/', (req, res) => {
    res.sendFile(path.join('frontend', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
