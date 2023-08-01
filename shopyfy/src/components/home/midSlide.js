import { Box, styled } from "@mui/material";
import Slide from './slides';

const Components = styled(Box)`
    display:flex;
`
const LeftComponent = styled(Box)(({ theme }) => ({
    width: '84.2%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme }) => ({
    background: '#FFFFFF',
    margin: '10px',
    padding: '5px',
    width: '15%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

export const MidSlide = ({ products, title, timer }) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Components>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="ad" style={{ width: 217 }} />
            </RightComponent>
        </Components>
    )
}

export default MidSlide;