const express = require('express');
const product = require('../model/product');
const router = express.Router();


router.get('', function(req, res) {
    product.find({}, function(err, foundProducts){
        res.json({foundProducts});
    });  
});

router.get('/:productId', function(req, res) {
    const productId = req.params.productId;
    product.findById(productId, function(err, foundProduct){
        if(err) {
            return res.status(422).send({errors: {title: 'Product error', detail: 'Product not found!'}});
        }
        return res.json({foundProduct});
    });  
});

module.exports = router;