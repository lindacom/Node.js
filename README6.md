Handling form data
===================
1. In the pages folder create a file called feedback.js
2. In the views > layouts folder create a form template called feedback.js
3. handle post - requests. In the routes > feedback.js file enter the post route:

```
 router.post('/', (request, response) => {
    return response.send('feedback form posted');
  });
```

4. Install body parser - npm install body-parser 
5. include it in the server.js file - const bodyParser = require('body-parser')
6. in the server.js file use the body parser in app.use method:

```
app.use(bodyParser.urlencoded({ extended: true }));
```

7. Install Express validator - npm install express-validator
8. in the routes > feedback.js file require express validator

```
const { check, validationResult } = require('express-validator');
```

9. In the routes > feedback.js file add the validation to the GET and post routes:

```
module.exports = () => {

  router.get('/', (request, response) => {

const errors = request.session.fedback ? request.session.feedback.errors : false;
request.session.feedback = {};

    response.render('layout', { pageTitle: 'Welcome', template: 'feedback', errors });
  });

  router.post(
    '/',
    [
      check('nam').trim().isLength({ min: 3 }).escape().withMessage('A name is required'),
      check('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('A valid email address is required'),
      check('title').trim().isLength({ min: 3 }).escape().withMessage('A title is required'),
      check('message').trim().isLength({ min: 5 }).escape().withMessage('A message is required'),
    ],
    (request, response) => {
      const errors = validationResult(request);

if(!errors.isEmpty()) {
  request.session.feedback = {
    errors: errors.array(),
  };
  return response.redirect('/feedback');
}

      return response.send('feedback form posted');
    }
  );

  return router;
};
```

10. In views > pages > feedback.ejs include the errors:

```
 <% if(locals.errors) {%>
        <div class="alert alert-danger">
          <ul>
            <% errors.forEach(function (error) {%>
            <li><%= error.msg %></li>
            <%})%>
          </ul>
        </div>
        <%}%>
```
