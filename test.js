const fs = require('fs');
const key = fs.readFileSync('.env.local', 'utf8')
  .split('GEMINI_API_KEY=')[1]
  .split('\n')[0]
  .replace(/"/g, '')
  .trim();

fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key)
  .then(r => r.json())
  .then(data => {
    if (data.error) {
      console.log('Error:', data.error);
    } else {
      console.log('Available models:');
      console.log(data.models?.map(m => m.name));
    }
  });
