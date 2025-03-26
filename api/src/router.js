const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/cliente');
const Telefone = require('./controllers/telefone');
const Produto = require('./controllers/produto');

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop API'});
});

router.post('/clientes',Cliente.create);
router.get('/clientes',Cliente.read);
router.get('/clientes/:id',Cliente.readOne);
router.patch('/clientes/:id',Cliente.update);
router.delete('/clientes/:id',Cliente.remove);

router.post('/telefones',Telefone.create);
router.get('/telefones',Telefone.read);
router.patch('/telefones/:id',Telefone.update);
router.delete('/telefones/:id',Telefone.remove);

router.post('/prod',Produto.create);
router.get('/prod',Produto.read);
router.patch('/prod/:id',Produto.update);
router.delete('/prod/:id',Produto.remove);

module.exports = router;