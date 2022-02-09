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

Middleware
=================

1. routing middleware - e.g. app.get
2. parameter routes - e.g. http:/localhost:3000/users/mary

Error hadling middleware
------------------------
throw an error in the route:

```
app.route('/item')
.get((req, res) => {
throw new Error();
})
```
N.b. if there is no error handler then Express will use the default handler.

The error handler function is created at the end of the file (before the listen method)

```
app.use{(err, req, res, next) => {
  res.status(500).send(` alert:${err.stack}`);
  });

Express router
===============
express router lets you create sub applications that listen on spcific routes.  You can define middleware and routes

```
const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
response.render('pages/index', { pageTitle: 'Welcome' });
});

module.exports = router;
```

1. In the routes/index.js file enter the above
2. In the server.js file require the routes folder:

```
const routes = require('./routes');
app.use('/', routes);
```
Routing parameter
-----------------
Set route with id parameter and return id data from json

```
import data from './data/data.json';
```
```
app.get ('/item:id, (req, res) => {
   let user = Number(req.params.id) 
   res.send(data[user]);
   })
   
```
N.b. Number converst string to number

Routing methods
-------------------
redirect to a webpage:

```
app.get('/item', (req, res) =>
   res.redirect('http://www.linkedin.com')
   );
```

download an image:

```
app.get('/images', (req, res) =>
res.download('images/rocket.jpg')
);

Chaining routes
---------------
Chaining routes allows you to use multiple routes on one path.

```
app.route('/item')
.get((req, res) => {
res.send('a get request')
})
.put((req, res) =>
res.send('a put request')
)
.delete((req, res) =>
res.send('a delete request')
);
```



Create a new express application using express generator
=========================================================
1. Navigate to directory and install exress generator - nm install express-generator -g
2. select options for the new express project - express --view=hbs (nb. you cn enter express -h to see all available options)
3. A new project will be created with the starter files you need
4. install dependencies - npm install
5. in VS code open the new project folder
6. start the project - npm start 
7. View the project i the browser - localhost:2000

Documentation
==============
expressjs.com/en/guide/routing.html
https://expressjs.com/en/resources/middlewre.html

