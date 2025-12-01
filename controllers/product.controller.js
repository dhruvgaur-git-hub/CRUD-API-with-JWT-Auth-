const newproduct = require('../models/user.model');

exports.getAllProducts = async (req, res) => {
    try {
        const product = await newproduct.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await newproduct.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await newproduct.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await newproduct.findByIdAndUpdate(req.params.id, req.body);

        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }

        const updatedProduct = await newproduct.findById(req.params.id);
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await newproduct.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
