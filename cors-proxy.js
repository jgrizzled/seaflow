// CORS Anywhere proxy server for testing non-CORS OpenSea API
const cors_proxy = require('cors-anywhere');

const port = process.env.PORT || 8080;

cors_proxy
  .createServer({
    originWhitelist: []
  })
  .listen(port, '0.0.0.0', function () {
    console.log(`CORS Anywhere proxy server started on http://localhost:${port}`);
  });
