Tämä on Mansikkalan koulun Infonäytön ohjelmarakenne ja koodi.

Tarvitset nämä jos pyörität linux ympäristössä:

$ sudo apt install nodejs

Tarkista että nodejs ja npm asentui:

$ node -v
$ npm -v

Asenna ReactJS ja tarvittavat bootstrap moduulit:

$ sudo npm install -g create-react-app
$ sudo npm install bootstrap
$ sudo npm install react-bootstrap
$ sudo npm install react-bootstrap-button

npm komentoja tarvittaessa:

# npm start

Ajaa sovelluksen kehittäjä tilassa.\
Avaa [http://localhost:3000] selaimessa nähdäksesi sovelluksen.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# npm run build

Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
