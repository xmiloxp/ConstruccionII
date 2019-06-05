const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')


const controller = require('./controller/documentController')

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use('/', controller)

app.get('/documents', (req, res) => {
  Document.find()
    .then((docs) => res.status(200).send(docs))
    .catch((err) => res.status(400).send(err));
});

// app.post('/documents', (req, res) => {
//   const body = req.body;
//   const doc = new Document({
//     name: body.name,
//     text: body.text
//   });
//   doc.save(doc)
//     .then((doc) => res.status(201).send(doc))
//     .catch((err) => res.status(400).send(err));
// });

module.exports = app;
