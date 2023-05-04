Building a chat application
=============================
1. Open a project folder in VS code
2. Install NPM - npm init --y this will create a package.json file. (N. you may first need to go to nodejs.org/en/download and download Node.js)
3. install Express - npm install -s express (this will save it to the package.json file under dependencies and create a node modules folder)
4. install express body parser - npm install -s body-parser (when this is installed the console will be able to receive request body)
5. create a server.js file to serve a static file(express.static)
6. create an index.html file
7. run nodemon server.js in the terminal
8. In the browser go to localhost:3000
9. write the application
10. test the POST route using postman
11. Install socket.io - npm install -s socket.io
12. To debug the application click he debug icon in VS code and click start debutting
13. To test the application use a framework such as Jasmine

Testing an application using Jasmine
===================================
1. install Jasmine - npm install --save -dev jasmine
2. initialise Jasmine - ./node_module/.bin/jasmine init. a spec folder will be created
3. go to the package.json file and in the script key chang the test key to "Jasmine"
4. create a specification file (e.g. server.specs.js)
5. in the terminal run npm test to run the test 
