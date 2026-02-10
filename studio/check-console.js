// Simple script to check if the Sanity Studio page loads without errors
const http = require('http');

console.log('Checking http://localhost:3333...\n');

const options = {
  hostname: 'localhost',
  port: 3333,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}\n`);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('✅ Page loaded successfully');
    console.log(`Content length: ${data.length} bytes`);
    
    // Check for error indicators in the HTML
    if (data.includes('__sanityError')) {
      console.log('\n⚠️  Error handling code detected in page');
    }
    
    if (data.includes('Uncaught error')) {
      console.log('\n❌ Uncaught error found in page');
    } else {
      console.log('\n✅ No uncaught errors detected in HTML');
    }
    
    // Check for required scripts
    if (data.includes('/@vite/client')) {
      console.log('✅ Vite client script found');
    }
    
    if (data.includes('.sanity\\runtime\\app.js')) {
      console.log('✅ Sanity app script found');
    }
    
    console.log('\n📋 To check browser console:');
    console.log('1. Open http://localhost:3333 in your browser');
    console.log('2. Press F12 to open DevTools');
    console.log('3. Click Console tab');
    console.log('4. Look for red error messages');
  });
});

req.on('error', (error) => {
  console.error(`❌ Error: ${error.message}`);
});

req.end();
