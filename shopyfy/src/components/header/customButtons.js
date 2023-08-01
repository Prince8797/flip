import { useState, useContext } from "react";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { DataContext } from "../../context/data-provider";
import { useSelector } from "react-redux";

// Components imported
import LoginDialog from "../login/loginDialog";
import Profile from "./profile";

const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: 'center',
    margin: "0 4% 0 auto",
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const LoginButton = styled(Button)`
    color:#2874f0;
    background:#fff;
    text-transform:none;
    padding:5px 60px;
    margin-right:55px;
    font-size:16px;
    width:135px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);  // Must be used inside here --> not outside
    const { account, setAccount } = useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ?
                    <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ marginRight: "40px", fontSize: "16px", width: "150px" }}>Become a Seller</Typography>

            <Typography style={{ marginRight: "40px", fontSize: "16px" }}>More
            </Typography>

            <Link to='/cart' style={{ display: "flex", textDecoration: 'none', color: 'inherit' }}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>

            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}
export default CustomButtons;