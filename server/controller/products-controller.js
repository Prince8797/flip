import { response } from 'express';
import Product from '../model/product-schema.js'


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({}); // .find({}) will take all the data from database.
        response.status(200).json(products);  // .json() sends the products data to the frontend.
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getProductById = async (request, response) => {s
    try {
        const id = request.params.id;
        const product = await Product.findOne({ 'id': id })
        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
