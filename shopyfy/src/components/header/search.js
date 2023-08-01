
import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`
const ListWrapper = styled(List)`
    position:absolute;
    background:#ffffff;
    color:#000;
    margin-top:36px;
`

const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const getText = (text) => {
        setText(text);
    }

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <Box style={{ color: "blue", padding: 5, display: "flex" }}>
                <SearchIcon />
            </Box>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(products => products.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(product => (
                            <ListItem>
                                <Link
                                    to={`/product/${product.id}`}
                                    onClick={() => setText('')}
                                    onClose={() => setText('')}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}
export default Search;