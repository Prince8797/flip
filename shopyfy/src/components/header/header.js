import { AppBar, Toolbar, Box, styled, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Components imported
import Search from './search';
import CustomButtons from './customButtons';

// Search Component contains the InputBase of MUI which gives the input search box.
// CustomButtons contains everything to the right of the Search component.


const StyledHeader = styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Component = styled(Link)`
    margin-left:12%;
    line-height:0%;
    text-decoration:none;
    color:inherit;
`
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
`
const PlusImage = styled('img')({
    width: 10,
    marginLeft: 4
}) // html tags are styled as a object and use camelcasing.
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))


const CustomButtonsRapper = styled(Box)(({ theme }) => ({
    margin: "0 5% 0 auto",
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const Header = () => {

    const logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 200 }} onClick={handleClose}>
            <List>
                <ListItem>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>{list()}</Drawer>

                <Component to='/'>
                    <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <SubHeading>Explore&nbsp;
                        <Box component='span' style={{ color: '#FFE500' }}>Plus</Box>
                        <Box component='span'><PlusImage src={subURL} alt="sub-logo" /></Box>
                    </SubHeading>
                </Component>
                <Search />
                <CustomButtonsRapper>
                    <CustomButtons />
                </CustomButtonsRapper>
            </Toolbar>
        </StyledHeader >
    )
}
export default Header;