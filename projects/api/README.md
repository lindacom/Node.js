Node API with security
=======================
An API that uses login and registration using JSON Web Token

1. Create a project folder ad open in VS code
2. Install dependencies:

```
npm init && install body-parser express nodemon && npm install --save -dev babel-cli babel-preset-env babel-preset-stag-0
```

3. in package.json file in the scripts section add:

```
"start": "nodmon api.js"
```

4. run npm start in the terminal.  Open a browser and enter localhost:8090/api/customers
5. Open postman
6. In the api.js file create a register post route that creates a new customer into the database

```
router.route("/customers/auth/register").post((request, response) => {
  let newc1 = request.body.CustomerName;
  let newc2 = request.body.email;
  let newc3 = request.body.password;

  Db.registerCustomers(newc1, newc2, newc3).then((data) => {
    response.json(data[0]);
  });
});
```
7. in the db operations file create a function to add new registratin to the database

```
async function registerCustomers(CustomerName, email, password) {
  let newcust1 = CustomerName;
  let newcust2 = email;
  let newcust3 = password;

  try {
    //connect to the database using dbconfig
    let pool = await sql.connect(config);
    // execute query
    let items = await pool
      .request()
      .query(
        "INSERT INTO customers (CustomerName,email, password) VALUES ('" +
          newcust1 +
          "','" +
          newcust2 +
          "','" +
          newcust3 +
          "') "
      );

    return items.recordsets;
  } catch (error) {
    console.log(error);
  }
}
```
8. Test the register route in postman.  (enter CustomerName, email and password in the body of the post)
9. install bcrypt and json web token (JWT) - npm i bcrypt jsonwebtoken
10. import JWT into the api.js file - var jwt = require("jsonwebtoken");
11. add JWT set up code in the API.JS file:

```
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorizatio &&
    req.headers.authorizatio.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" "[1], "RESTFULAPIs", (err, decode) => {
        if (err) req.user = undefned;
        req.user = decode;
        next();
      })
    );
  } else {
    req.user = undefined;
    next();
  }
});
```

12. create a login route

```
router.route("/customers/login").post((request, response) => {
  let loginc1 = request.body.CustomerName;
  let loginc2 = request.body.email;
  let loginc3 = request.body.password;

  Db.loginCustomers(loginc1, loginc2, loginc3).then((data) => {
    //  response.json(data[0]);
    //  var user = response.json(data[0]);
    if (!data) {
      response
        .status(401)
        .json({ message: "Authentication failed. No user found" });
    } else {
      response.json({
        token: jwt.sign(
          { email: data.email, username: data.usernae, __id: data.id },
          "RESTFULAPIs"
        ),
      });
    }
  });
});
```

13. in postman use the login route to create a post request.  then copy the token code from the response
14. In postman enter the restricted route and then in the headers eter authorization key and in the value enter JWT followed by the pasted token code.
