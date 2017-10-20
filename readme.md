# Project Title

An API for creating a word list that you can use for word games and dictionaries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get the API running you will need to have NodeJS and a Mongo DB installed.

To install NodeJS follow this guide:
[Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)
[Mac](https://treehouse.github.io/installation-guides/mac/node-mac.html)
[Linux](https://treehouse.github.io/installation-guides/linux/node-linux.html)

and to install MongoDB follow this guide:
[Windows](https://treehouse.github.io/installation-guides/windows/mongo-windows.html)
[Mac](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
[Linux](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

### Installing

Clone, fork or download the project

Start up mongoDB

```
~/mongodb/bin/mongod
```

Enter the mongo CLI on another terminal tab or window

```
~/mongodb/bin/mongo
```

Create a new database for the API to use

```
use dictionaryApi
```

Create a collection in that database

```
db.createCollection('wordList')
```

Insert an object with a name key and words value. The API will search for this object and insert arrays for each letter once a word is added.

```
db.wordList.insert({'name': 'words'})
```

Once the object has been placed in the wordList collection the API can run normally.
From the applications directory run

```
npm install
```

After it finishes installing you can run

```
nodemon server.js
```

to start the API Server.

Once started you can go to ``localhost:3000`` and you should get a welcome page explaining how to use the API.


## Built With

* [NodeJs](https://nodejs.org/)
* [ExpressJS](https://expressjs.com/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Dreii/contributions) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Sean Verhaagen** - *Initial work* - [Dreii](https://github.com/dreii)([website](https://seanverhaagen.com))

See also the list of [contributors](https://github.com/Dreii/wordsApi/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
