const express = require ('express');
const router = express.Router();
//const mongoose = require('mongoose');
//const _id = mongoose.Types.ObjectId;

//const Product = require('../routes/models/product');

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/',(req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    // console.log(err);
    // product
    //     .save()
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});



router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router; 