const fs = require('fs');

(async function(){
  try {
    const route = require('../app/api/contact/route');
    const body = { name: 'Alice', email: 'alice@example.com', message: 'Hello' };

    // Create a minimal fetch-like Request for the handler
    const req = new global.Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // Some Node versions don't have global.Request — use node-fetch if needed.
    if (typeof global.Request === 'undefined') {
      const { Request } = require('node-fetch');
      global.Request = Request;
    }

    const res = await route.POST(req);
    const json = await res.json();
    console.log('handler response:', res.status, json);
  } catch (err) {
    console.error('error running test:', err);
  }
})();
