Templating with Express
=========================
1. Create a views folder and a layout sub folder called layout.  Create a file called index.ejs to contain all the page structure code. After the header include the template:

```
<%- include(`../pages/${template}`) %>
```

3. In the views folder create another subfolder called pages and create a file called index.ejs to contain all the page content code
4. in the routes > index.js file use the router.get method to render the layout:

```
module.exports = () => {
  router.get('/', (request, response) => {
    response.render('layout', { pageTitle: 'Welcome', template: 'index' });
  });
```
