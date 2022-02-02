Modules
==========
export a module
----------------
```
exports.myText = "hello"
```

import a module
------------------
In a new file require the filename

```
var myModule = require('./mymodule.js')
console.log(myModule.myText)
```

N.b. NPM is used to install third party packages which are modules bundled together.

Working with files
==========================
Read from file
---------------------
You can read from files in two ways:

```
var fs = require('fs')
fs.readFile('./data.json', utf-8, function (err, data) {
    console.log(data)
})
```
N.b. the readfile parameters are file, file format and callback function

N.b. the above statement returns a string. To return an object add var data = JSON.parse(data) to the function parameter above.

```
var fs = require(fs')
var data = require('./data.json')
console.log(data)
```
N.b. this statement returns an objct

Read a directory
---------------------
```
var fs = require(fs')
fs.readdir('c:/', (err, data) => {
   // enter code here
}
```
Write to a file
---------------------
```
var fs = require(fs')
var  data = { name: 'bob'}

fs.writeFile('data.json', data, (err) => {
   console.log('write finished', err)
   }
```

N.b. the structure of the writeFile parameters is new file name(path), data(string to be inserted into file) and callback

To execute the writeFile statement in the terminal enter node <filename>. the file will be created

Nb. to turn object into string use JSON.stringify(data) in the parameters instead
  
Socket.io
===============
  bi-directional communication from server to client
  
Documentation
======================
  node.js frameworks:
  express - see http://expressjs.com
  socket.io - see https://socket.io
    Jasmine - https://jasmine.github.io

