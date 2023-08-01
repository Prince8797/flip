
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { useState } from 'react';

const Component = styled(Menu)`
    margin-top:5px;
`
const Logout = styled(Typography)`
    font-size:14px;
    margin-left:8px;
    font-weight:600;
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ fontSize: "16px", width: "135px", cursor: "pointer" }}>{account}</Typography>
            </Box>
            <Component anchorEl={open} open={open} onClose={handleClose}>
                <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color="primary" fontSize='small' />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}
export default Profile;