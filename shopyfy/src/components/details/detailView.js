import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Box, styled, Grid } from '@mui/material';

// components
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './actionItem';
import ProductDetails from './productDetails';

// CSS
const Component = styled(Box)`
    background:#f2f2f2;
`

const Container = styled(Grid)`
    background:#FFFFFF;
    display:flex;
`

const RightContainer = styled(Grid)`
    margin-top:50px;
    padding-left:30px;
`

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))  // if condition was used to prevent infinite loop
    }, [dispatch, id, loading, product]);

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer lg={8} md={8} sm={8} xs={12}>
                        <ProductDetails product={product} />
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}

export default DetailView;