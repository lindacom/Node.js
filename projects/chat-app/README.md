Building a chat application
=============================
1. Open a project folder in VS code
2. Install NPM - npm init --y this will create a package.json file. (N. you may first need to go to nodejs.org/en/download and download Node.js)
3. install Express - npm install -s express (this will save it to the package.json file under dependencies and create a node modules folder)
4. install express body parser - npm install -s body-parser (when this is installed the console will be able to receive request body)
5. install socket.io - npm install socket.io
6. create a server.js file to serve the static file index.html (express.static)
7. create the index.html file
8. run nodemon server.js in the terminal (or run the command node server.js). You will receive a terminal message that server is listening on port 3000
9. In the browser go to localhost:3000 you will see the index page contents displayed.
10. write some content the the form fields of the application and click the send button

Testing the app in Postman
-----------------------------------
Test the POST route using postman

Debugging the application
-------------------------
13. To debug the application click he debug icon in VS code and click start debutting

Testing an application using  a framework such as Jasmine
===========================================================
1. install Jasmine - npm install --save -dev jasmine
2. initialise Jasmine - ./node_module/.bin/jasmine init. a spec folder will be created
3. go to the package.json file and in the script key chang the test key to "Jasmine"
4. create a specification file (e.g. server.specs.js)
5. in the terminal run npm test to run the test 
