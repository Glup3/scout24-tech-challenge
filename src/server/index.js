import server from './server';

const port = process.env.PORT || 4000;

(async () => {
  server.listen(port, () => console.info(`Server running on port ${port}.`));
})();