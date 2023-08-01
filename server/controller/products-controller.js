import { response } from 'express';
import Product from '../model/product-schema.js'


export const getProducts = async (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Max-Age", "1800");
    response.setHeader("Access-Control-Allow-Headers", "content-type");
    response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    try {
        const products = await Product.find({}); // .find({}) will take all the data from database.
        response.status(200).json(products);  // .json() sends the products data to the frontend.
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getProductById = async (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Max-Age", "1800");
    response.setHeader("Access-Control-Allow-Headers", "content-type");
    response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    try {
        const id = request.params.id;
        const product = await Product.findOne({ 'id': id })
        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
