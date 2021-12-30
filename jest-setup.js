require('@testing-library/jest-dom');
const fs = require('fs');

// Mock fetch() globally
if (process.env.NODE_ENV == 'test') {
  const mockData = JSON.parse(fs.readFileSync('mock-data.json', 'utf8'));
  function mockResponse(data) {
    return {
      json: () => data,
      status: 200,
      statusText: '',
      ok: true
    };
  }
  global.fetch = (url, options) => {
    // Mock OpenSea JSON API
    if (url.includes('localhost:8000/')) {
      if (url.includes('/events')) return mockResponse(mockData['/events'].get);
    }
    throw new Error('URL not handled in mock fetch');
  };
} else {
  // Note: node-fetch@^2 for CommonJS support
  // To run tests with remote API: NODE_ENV=dev yarn run jest
  global.fetch = require('node-fetch');
}
