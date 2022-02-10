Node.js deploying applications
==============================

Move applications from development to staging to production.

GIT deployment
==============
1. from the commandline in node in the terminal type git init to create a git repository in the directory you are in 
2. type git add -A to add all the files in the directory to the repository
3. type git commit -a -m "foldername" to commit

you now have a local repository.

Use git clon command to create a copy of the files
use git checkout -b tmp to check out a temporary branch

to link repositories together - git remote add second .../filepath then enter git push second master

from browser:

1. In browser go to github.com
2. create a new repository
3. under push an existing repository from the commandline copy the command
4. paste the command in the terminal
5. to change a file (e.g readme.md) type vi README.md
6. to commit changes type it commit -a -m "message"
7. to push changes to githu type git push origin master
8. check the changed file in the repository.

AWS Elastic Bean
=================
https://console.aws.amazon.com

1. create an AWS account
2. install AWS eb cli tools - https://docs.aws.amazon.com/console/elasticbeanstalk/eb-cli-install

set up user:

1. in AWS go to IAM and click users and click add users button
2. Enter a user and select programmatic access
3. select attach existing policies directly
4. search beanstalk and select AWS Elastic Beanstalk full access
5. click review
6. click create user

you will now have access key and secret access key for the user

Set up elastic beans in the terminal:

1. In the terminal type eb init
2. accept default location
3. enter user credentials
4. create a new application (option 2)
5. enter an application name
6. select Y to set up SSH for instances and create a key pair

Create an environment (production):

1. In the commandline enter the following to create an instance type - eb create prod --instance type t2.small --envvars NG-CMD-prod, --platform node.js

the environment will be deloyed in the cloud

create an environment (staging):

1. type the command git checkout -b staging
2. enter the same command for creating a production instance bu replace prod with staging and enter --branch_default after it

View application:

1. type git checkout master
2. type eb console

the eb application displays in the browser showing application and environment.

Azure
======

create user account:

1. get an azure login at https://azure.microsoft.com/en-us. N.b. free tier accounts also need a credit card to set up
2. get the azure cli tools - click portal > app service
3. click the node.js quick start link
4. click azure cli link
5. click the install link

build an application in Azure:

1. in the terminal enter AZ login
2. navigate to https://aka.ms/devicelogin and enter the code provided
3. a confirmation message appears

create a user:

1. enter az webapdeployment user set --user -name appname --password <mypassword>
2. to get a location enter az appservice list-locations --SKU F1. a list of locations will be displayed
  to create a roup enter az group create --name <mygroupname> --location "WestUS2"
3. to set group as default group enter az configure --defaults group = <mygroupname>
4. set up free tier billing plan - az appservice pln create --name <myplanname> sku FREE
5 To set the plan up as a default plan - az configure --defaults plan = <myplanname>
  
Create web application
  
1. az webapp create --name <myappname> --deployment -location git --plan <myplanname>
  
repeate the above setp for staging environment
  
2. to set environment variables enter az webapp config appsettings set --name <myname>
3. repeat for staging
4. git puh az-prod master
5. az webapp browse --name <myappname>

you can see application in the browser sitting in the cloud on a windows server
  
6. go to azure dashboard and click portal to see a list of applications.
7. click application to see information including diagnose problems, app settings etc.
8. git config push.default upstream
9. set up branches -git branch --set upstream -to az-prod master master
10. repeat for staging
11. checkout staging - git checkout staging
  
updating application:
  
1. to edit a file use vi command followd by filename
2. to commit git commit -a -m "message"
3. push to master branch - git push 
  
Continuous deployment
=======================
  
manage deployment pipelines
  
Jenkins
-------------
on premises solution. Easier to string apps together. Control over security. https://jenkins.io
  
set up github webhook in jenkins to detect changes, run tests and deploy code
  
1. click create item
2. enter name
3. select copy from: node deployment
4. On the general tab enter project url
5. under service code management enter git repository url
6. in branches to build select master
7. under build triggers select github hook trigger from GITScm polling
8. go to github repository and click settings
9. select webhooks
10. click add webhook
11. enter payload url (jenkins)
12. go back to jenkins
13. under post build actions enter branch to push and targget remote name details
14. click save
15 click build now
16. click the progress bar to view the logs
  
  
  
  
 

