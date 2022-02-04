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

Create an express server to serve static pages:

```
const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});
```

serve both images and files:

N.b app.use is used to add middleware to the application. Middleware is required to serve images from the folder.

```
app.use(express.static(path.join(__dirname, './static')));
```


