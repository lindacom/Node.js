const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

// Home page route /products.
router.get('/', function (req, res) {
    res.status(200).json({
        message: 'handling get requests to /products'
    });
 });


router.post('/', upload.single('productImage'), (req, res) => {
    console.log(req.file);
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'handling post requests to /products',
    // return the body properties
        createdProduct: product
    });
});

router.get('/:productId', function (req, res) {
    const id = req.params.productId;
    if(id === 'special') {
    res.status(200).json({
        message: 'you discovered the special id',
        id: id
    });
} else {
    res.status(200).json({
        message: 'you passed an id'
    });
}
 // res.send('Wiki home page');
});

router.patch('/productId', function (req, res) {
    res.status(200).json({
        message: 'updated product'
    });
 });

 router.delete('/productId', function (req, res) {
    res.status(200).json({
        message: 'deleted product'
    });
 });

module.exports = router;