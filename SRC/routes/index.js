const express = require('express');
const router =  express.Router();



//traer el modelo de la base de datos
const Negocios = require('../models/negocios');

router.get('/', (req,res) => {
    res.render('home');
});


router.get('/add', async (req,res) => {
    //consultar base de datos
    res.render('index');
});



router.get('/all', async (req,res) => {
    //consultar base de datos
    const negocios = await Negocios.find();
    res.render('lista',{
        negocios
    });
});

router.get('/lista', async (req,res) => {
    //consultar base de datos
    const negocios = await Negocios.find();
    res.render('lista',{
        negocios
    });
});

router.get('/comida', async (req,res) => {
    //consultar base de datos
    const negocios = await Negocios.find( { "Category": "Comida" } );
    res.render('lista',{
        negocios
    });
});

router.get('/medicina', async (req,res) => {
    //consultar base de datos
    const negocios = await Negocios.find( { "Category": "Medicina" } );
    res.render('lista',{
        negocios
    });
});

router.get('/licores', async (req,res) => {
    //consultar base de datos
    const negocios = await Negocios.find( { "Category": "Bebidas" } );
    res.render('lista',{
        negocios
    });
});


router.get('/servicio', async (req,res) => {
    //consultar base de datos
    const negocios = await Negocios.find( { "Category": "Servicio" } );
    res.render('lista',{
        negocios
    });
});

router.post('/agregar', async (req,res ) => {
//almacenar en la base de datos
    const negocio = new Negocios(req.body);
    await negocio.save();
    res.redirect('/lista');
});

router.get('/delete/:id', async (req,res ) => {
    //eliminar de la base de datos
    const { id } = req.params;
    await Negocios.remove({_id:id});
    res.redirect('/lista');
    });


    router.get('/turn/:id', async (req,res ) => {
        //Cambiar status de la base de datos
        const { id } = req.params;
        const negocio_status = await Negocios.findById(id);
        negocio_status.Status = !negocio_status.Status;
        await negocio_status.save();
        res.redirect('/');
        }); 

    router.get('/edit/:id', async (req,res ) => {
        //eliminar de la base de datos
        const { id } = req.params;
        const idnegocio = await Negocios.findById(id);
        negocios.findBynam
        res.render('edit', {
            idnegocio
        });
        });  
        
    
    router.post('/update/:id', async (req,res ) => {
        //eliminar de la base de datos
        const { id } = req.params;
        await Negocios.update({_id:id}, req.body);
        res.redirect('/');
        
        });     

module.exports = router;