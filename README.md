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
Avaa [http://localhost:3000](http://localhost:3000) selaimessa nähdäksesi sovelluksen.

Sivu latautuu uudelleen kun päivität ja tallennat koodin.\
Voit myös nähdä lint virhekoodit konsolissa.

# npm test

Ajaa sovelluksen interaktiivisessa testitilassa.\
katso kohta [testiajot](https://facebook.github.io/create-react-app/docs/running-tests) lisätiedoista.

# npm run build

Rakentaa julkaistavan sovelluksen build kansioon.\
Se kasaa koodin oikein julkaisu tilassa ja optimoi sovelluksen parhaalle suorituskyvylle.

Sovellus minimoidaan ja tiedostonimet liitetään tiivisteinä.
Muista että tätä käytetään kun tiedostot ovat serverillä, esim vscodessa tämä ei toimi.

Sovellus on valmiina käyttöönotettavaksi!
