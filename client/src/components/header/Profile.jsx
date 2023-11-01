import {Box , Typography , Menu , MenuItem ,styled } from "@mui/material";
import { useState } from "react";


const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 16px;
    margin-left:2px;
`

const Profile = ({account, setAccount}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    
    const handleClose = () => {
        setOpen(false);
    }
    const logout = () => {
        setAccount('');

    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{marginTop: 2, cursor: 'pointer'}}>{account}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={ () => {handleClose();logout();}}>
                    
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile;