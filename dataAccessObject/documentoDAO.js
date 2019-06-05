const Document = require('../db/models/document').Document;
const logica = require('../logic/documentLogic')
const DAO = {}
DAO.add = (req, res) => {
    const body = req.body;
     
    const doc = new Document(logica.documento(body));
    doc.save(doc)
      .then((doc) => res.status(201).send(doc))
      .catch((err) => res.status(400).send(err));
  };

module.exports = DAO;