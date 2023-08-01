import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Navbar from "./navbar";
import Banner from "./banner";
import { getProducts } from "../../redux/actions/productActions";
import Slide from './slides';
import MidSlide from "./midSlide";
import MidSection from "./midSection";

const Components = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts);

    // This getProducts is different from one which is in useEffect. state.getProducts is taking the imported data from getProducts.. go to inspect and look to state of redux.

    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Components>
                <Banner />
                <MidSlide products={products} title="Deal of the day" timer={true} />
                <MidSection />
                <Slide products={products} title="recommended for you" timer={false} />
                <Slide products={products} title="Seasonal Top" timer={false} />
                <Slide products={products} title="Top Discount Products" timer={false} />
                <Slide products={products} title="Accessories" timer={false} />
                <Slide products={products} title="suggested for you" timer={false} />
                <Slide products={products} title="Top Seller" timer={false} />
            </Components>
        </>
    )
}
export default Home;