import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    vertical-align:baseline
    margin:15px; 
    &> p{
        font-size:14px;
        margin-top:10px
    }
`
const StyledBadge = styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00CC00;
    font-size:15px;
`
const RowText = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    &> td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`

const ProductDetails = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));   // Current date + 5 days

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>

            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 reviews
                <Box component='span'>
                    <img src={fassured} alt="fassured" style={{ width: 77, marginLeft: 20 }} />
                </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography>
                    <StyledBadge />Bank Offer5% Cashback on Flipkart Axis Bank Card T&C
                </Typography>

                <Typography>
                    <StyledBadge />Special PriceGet extra ₹3700 off (price inclusive of cashback/coupon) T&C
                </Typography>

                <Typography>
                    <StyledBadge />Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or more T&C
                </Typography>

                <Typography>
                    <StyledBadge />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* Know More
                </Typography>

                <Typography>
                    <StyledBadge />Partner OfferPurchase now & get 1 surprise cashback coupon in Future Know More
                </Typography>

                <Typography>
                    <StyledBadge />EMI starting from ₹257/month View Plans
                </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </RowText>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </RowText>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874f0' }}>SuperComNet</Box>
                            <Typography>GST invoice Available</Typography>
                            <Typography>View more Seller starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </RowText>
                    <RowText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="SuperCoins" style={{ width: 390 }} />
                        </TableCell>
                    </RowText>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </RowText>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetails;