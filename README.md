# F1 Hero 
A simple JavaScript web application used as a basis for building React apps with Redux, Sagas, React Router v4, Normalizr, Reselect, Axios and Jest/Enzyme for unit testing. 

### Overview
This application only serves as an example of how to construct a React.js application. Its main focus is keeping business logic out of React viewa/components entirely while maintaining a clean state tree, and optimizing networking via caching and cancellation. 
For example purposes, it leverages the excellent [Ergast Developer API](http://ergast.com/mrd/). While this app was built to respect the API's terms of use - please be respectful of this public api if you intent to play around with this example. 

### Setup

To run the application you will need [Node.js](https://nodejs.org) installed. 
You will also need NPM to install dependencies and run the application. If you need instructions on installing NPM, check out this [link](https://docs.npmjs.com/getting-started/installing-node).

Once you have installed Node and npm, the following steps are required to run the application:

1. `git clone` the application into a desired directory.
2. `cd` into the root of the project.
3. run `npm install`. This may take a minute or two
4. Once the installation is complete, run `npm start dev`. This will build the project and spin up a simple web server provided by webpack
5. Open up your favorite browser (Latest versions of Chrome, Safari, and Firefox are tested) and navigate to [http://localhost:8080](http://localhost:8080)
6. You should be presented with F1 Hero landing screen.
7. To run application unit tests, run `npm run test` from the root of the project.


#### Implementation Notes

##### Cache
Out of respect of the Ergast API Terms of Use as well as to improve percieved performance, the application implements a caching layer (basically a simple browser based fork of the excellent [https://github.com/AlbinoDrought/cachios](Cachios) project) that currently is using Session Storage as its persistence layer. If you wish to clear the cache, simply close the tab you are running the app in and restart it in a new one.

##### Cancellation
By using (redux sagas)[https://github.com/redux-saga/redux-saga] and the underlying network libraries cancellation mechinism - the app will cancel inflight requests if a user navigates away from a calling view. 



