# Model-View-Controller-MVC-Challenge-Tech-Blog

## Description

This projects serves as tech blog that utilizes the Model-View-Controller architecture. The 'blog_db' database stores all of the data for this mock blog. CRUD routes (using express HTTP methods GET, POST, PUT, and DELETE) were implemented to allow the insertion, deletion, updating, and viewing of the data on the back end.  

URL - https://tech-blog-tech-heaven-cc69f0b388f2.herokuapp.com/


## Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [Credits](#credits)

 * [License](#license)

 * [Questions](#questions)

## Installation

To run this project, run the following command:


```
npm init 
```


(add "-y" to answer yes to all questions regarding the creation of the package.json), then run the following code to install any necessary dependencies:


```

npm i 
```


Open an instance of MYSQL in a separate tab, navigating to the db folder holding the 'schema.sql' file. Run the following command to create the database:

```
SOURCE schema.sql;

```

You can then quit out of MYSQL with the following command:

```
quit;
```


Navigate back to your main terminal tab and run the following command once you have navigated to the folder holding the server.js file to seed the database:

```
npm run seed
```

Next run this command to connect to the server:

```
npm start
```

or just visit the deployed application at the following URL:

https://tech-blog-tech-heaven-cc69f0b388f2.herokuapp.com/


## Usage

Clone this repo and save it locally to your computer. Open terminal, git bash, or whichever command line interface you are using and navigate to the directory holding the server.js file. Run the following command:

```
npm start
```


## Credits

https://stackoverflow.com/questions/21599252/error-cannot-find-module-config (debugging)

https://stackoverflow.com/questions/67147585/error-cannot-find-module-config-javascript-module-is-in-the-same-folder-dir (debugging)

https://stackoverflow.com/questions/19678769/error-1049-42000-unknown-database-mydatabasename (debugging)

https://stackoverflow.com/questions/70021854/error-data-must-be-a-string-or-buffer-and-salt-must-either-be-a-salt-string-or (debugging)

https://stackoverflow.com/questions/36744308/next-is-not-defined-but-i-dont-understand-how-to-define-it-in-my-function (debugging)

https://github.com/CodyG-2021/14-Model-View-Controller-MVC-Tech-Blog/blob/main/controllers/homeRoutes.js (help with Routes - they are not working however)

Followed along with some of the activities in the week 14 folder - MVC.

Expert Learning Assistant 

## License

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Questions

If you have any questions about this application, please feel free to contact me at my email : josh.mayfield45@gmail.com and Github profile : https://github.com/jmayfield777