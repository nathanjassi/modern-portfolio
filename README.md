# Modern Portfolio

# Simple steps to setup workflow

Folders

1. Create a dist folder
2. Create index.html inside dist folder
3. Create sass folder
4. Create main.scss

Node

1. Install latest version of Node.js
2. Install package.json using "npm init" command inside project folder
3. Install node-sass using "npm i node-sass"
4. Modify package.json file to run script for node-sass compiler
   4a. Replace script test with sass
   4b. Replace test script value with the following: "node-sass -w scss/ -o dist/css/ --recursive"
5. Run the sass script using "npm run sass"
6. Start coding sass

About "node-sass -w scss/ -o dist/css/ --recursive" command

1. node-sass is the program we want to call
2. -w stands for watch. In this case we want to watch the scss folder
3. -o stands for output. In this case we want to output the compiled css into the dist/css folder
4. --recursive prevents issues with any partial scss files and auto reloads

Git Repository Setup

1. Create .gitignore file using command "touch .gitignore"
2. Inside .gitignore file add "node_modules" and save
3. Do git add .
4. Do git commit -m "Some Message"
5. Do git push
