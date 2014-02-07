
=Starting Out

===Things to install
- [Node.js](http://nodejs.org/download/)
- [npm](http://stackoverflow.com/questions/16000173/install-npm-node-js-package-manager-on-windows-w-o-using-node-js-msi)
- [MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

===Setting up the repo
- Create new repo on Github
- Clone it down, `git clone git@github.com:stolksdorf/sample_proj.git`
- Create a new app at Heroku
- Add it to your repo, `git remote add heroku git@heroku.com:sample_proj.git`
- 'git push origin master` updates your github repo
- `git push origin heroku` deploys your app to Heroku


===Getting Configured
- Run `npm init` to setup your `packages.json`. Fill out whatever you like, but we're using `app.js` as the entry point
- Pull in needed Node packages.
	- `npm install ejs --save`
	- `npm install express --save`
	- `npm install mongodb --save`
	- `npm install mongoose --save`
	- `npm install underscore --save`
- Add MongoDB to your project. `heroku addons:add mongohq`
- Copy in `modules`, `public`, `views`, app.js`, `Procfile`

===Run your App
- `node app.js` will start your server listening on port 5000
- Go to `localhost:5000` to see your app in action.
- To see changes in server-side code, you'll you'll need to restart the server. `ctrl+C` + `node app.js`
- To see changes in client-side code, just refresh the web page


=Structure Explained

===Server Side
- `modules` -  Where all your server side JS is kept.
- `modules/models` - DB models here. Include in a schema, statics, and methods
- `modules/middleware.js` - Middleware is code that's ran within an async stack. Things like: `request -> [load user -> is user admin?] -> return page.` Middleware is in the brackets.
- `node_modules` - Code for the node packages we pulled in using `npm` are stored here. Don't touch.
- `app.js` - Our heart of our apllication. Setups up our server and declares any resources we need.
- `package.json` - Machine readable description of our project. Let's Heroku know what it should do with the project.
- 'Procfile' - Command(s) that Heroku will run when it spins up a dyno.


===Client Side


