import axios from "axios";
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";
import { useState } from 'react'

const URL = "https://ekartweb.onrender.com";


export const getProducts = () => async (dispatch) => { // (dispatch)=> this is a middleware --> feature of thunk
    try {
        const [data, setData] = useState();
        await fetch(`${URL}/products`, {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then(({data}) => {
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }); //dispatch will internally call productReducer.jsdispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }); //dispatch will internally call productReducer.js
            });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
        const [data, setData] = useState();
        await fetch(`${URL}/product/${id}`, {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then(({data}) => {
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }); //dispatch will internally call productReducer.jsdispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }); //dispatch will internally call productReducer.js
            });
    } catch (error) {
        dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}
