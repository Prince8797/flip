
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_RESET, GET_PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}

// getProducts was all the products so it is an array thats why we used state={product:[]}



export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case GET_PRODUCT_DETAILS_RESET:
            return { product: {} }
        default:
            return state;
    }
}

// getProductDetails is the detail of a single product so it is an object thats why state={product:{}}