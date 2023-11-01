import { useState } from 'react';

import {AppBar, Toolbar,Box,Typography, Drawer , List , ListItem , styled} from '@mui/material';



//components
import Search from './Search';
import CustomButtons from './CustomButtons';

import {Link} from 'react-router-dom';
import { Button } from '@mui/base';

const StyledHeader =styled(AppBar)`
background: #8B4513;
height:55px;
`;
const Component = styled(Link)`
    margin-left : 4%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`

const SubHeading = styled(Typography)`
   font-size:28px;
   font-weight: 520;
   `

   const PlusImage= styled('img')({
   width: 38,
   height:40,
   marginLeft:4


   });

   const MenuButton = styled(Button)(({ theme }) => ({
   color: '#FFFFFF',
   background:  '#2874f0',
   border: 'none',
   boxShadow: 'none',
   textTransform: 'none',
   fontWeight: '600',
   height : '32px',
   width: '2%',
   display: 'none',    
   [theme.breakpoints.down('md')]: {
        display: 'block'

   }
}));



const CustomButtonWrapper = styled(Box)(({ theme }) =>({
   margin: '0 5% 0 auto',
   [theme.breakpoints.down('md')]: {
        display: 'none'
   }
}));



const Header = ()  => {

    
    const subURL = 'https://cdn4.iconfinder.com/data/icons/kids-filled-line/2048/5509_-_Girl_Reading-1024.png';
 
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);

    } 

    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )
 
    return (
       <StyledHeader>
        <Toolbar style={{minHeight: 55}}>
            <MenuButton onClick={handleOpen}>☰</MenuButton>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

            <Component to='/'>

                <Box style={{display: 'flex'}}>
                    <SubHeading>Bookztron 
                    </SubHeading>
                    <PlusImage src={subURL} alt="sub-logo"/>
                
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>

        </Toolbar>
       </StyledHeader>
    )
}
 
export default Header;