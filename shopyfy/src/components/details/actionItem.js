import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { payUsingPaytm } from "../../service/api";

// components imported
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { post } from '../../utils/paytm';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px',
    width: '100%'
})

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = () => {
        let response = payUsingPaytm({ amount: 500, email: 'codeforinterview@gmail.com' });
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <LeftContainer>

            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%', alignItem: 'center' }}>
                <Image src={product.detailUrl} alt="detailImg" />
            </Box>

            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 16, background: '#ff9f00' }}><ShoppingCartIcon />&nbsp;&nbsp;Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={() => buyNow()} style={{ background: '#fb541b' }}><FlashOnIcon />&nbsp;&nbsp;Buy Now</StyledButton>
        </LeftContainer>
    )
}
export default ActionItem;