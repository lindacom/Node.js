Express
========

Create an express server
==========================
1. create a project file
2. install express - npm install express
3. create a server.js file

```
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello Express :)');
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});
```
