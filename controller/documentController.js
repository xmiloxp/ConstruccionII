const router = require('express').Router();
const DAO = require('../dataAccessObject/documentoDAO')
//const documentController = require('../Controlador/documentController');

router.get('/', (req,res) => {
    res.render("form")
});
router.post('/add',DAO.add )
//router.get('/registrar', arbolController.registrar);
//router.post('/add', arbolController.save);
// router.get('/update/:id', arbolController.edit);
// router.post('/update/:id', arbolController.update);
// router.get('/delete/:id', arbolController.delete);

module.exports = router;