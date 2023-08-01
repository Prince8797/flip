import axios from 'axios';
import * as actionType from '../constants/cartConstants';
import { useState } from 'react'

const URL = 'https://ekartweb.onrender.com';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
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
                dispatch({ type: ADD_TO_CART, payload: data }); //dispatch will internally call productReducer.jsdispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }); //dispatch will internally call productReducer.js
            });
    } catch (error) {
        dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id })
}
