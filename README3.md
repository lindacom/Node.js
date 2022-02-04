Installing ESLint and Prettier
===============================

ESLint
----------
For code style and mistakes

1. install ES lint - npm install -D eslint
2. initialise ES Lint - npx eslint --init (in the wizard select To check syntax, find problems, and enforce code style, common js, none of these, N, node, use a popular style 
guide, json)

Prettier
------------
formatting conssistently

1. install prettier - npm install -D prettier eslint-config-prettier eslint-plugin-prettier
2. In visual studio code click the extensions icon and install ESLint and prettier
3. in the eslintrc.json file in the extends key add "prettier".  Add a new key called plugins with the value ["prettier"]
4. Create a new file called .prettierrc and add configuration
5. In visual studio click the icon in the bottom left of the screen and select settings.  In the search field enter save and select
format on save then search for format and enter prettier as the default formatter.

Install Nodemon
================
Watches files for changes and reloads application

1. Install nodemon - npm install -D nodemon
2. in the scripts key of the package.json file enter a new key "dev" with the value "nodemon serverjs"
3. To run nodemon in the commandline enter npm run dev
