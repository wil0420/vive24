const express = require('express');
const router =  express.Router();



//traer el modelo de la base de datos


router.get('/', (req,res) => {
    res.render('home');
});
  

module.exports = router;