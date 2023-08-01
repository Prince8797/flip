import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";

import { getProducts, getProductById } from "../controller/products-controller.js";
import { addPaymentGateway } from "../controller/payment-controller.js";

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});
router.get('/payment', addPaymentGateway);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);


export default router;
