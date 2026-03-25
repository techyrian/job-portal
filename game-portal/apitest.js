const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the header
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Node.js HTML Response</title>
    </head>
    <body>
        <h1>Hello from the Node.js server!</h1>
        <p>This is a raw HTML response.</p>
        <a href="https://strongdog.com/">Strongdog XP</a>
    </body>
    </html>
  `;
  res.end(htmlContent);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
