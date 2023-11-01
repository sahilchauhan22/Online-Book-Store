
import { Typography , Box , styled, TableRow, Table , TableBody, TableCell} from '@mui/material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ( { product } ) => {

    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
  
    return (
        <>
         <Typography>{product.title.longTitle}</Typography>
         <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14}}>
              8 Ratings & 1 Reviews
                            
          </Typography>
          <Typography>
              <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;
              <Box component="span" style={{ color : '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;
              <Box component="span" style={{ color : '#388E3C'}}>{product.price.discount}</Box>
           </Typography>
           <Typography>Availabe Offers</Typography>
           <SmallText>
                <Typography>➤ Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
                <Typography>➤ Get extra 13% off (price inclusive of discount) T&C </Typography>
                <Typography>➤ Buy 2 items save 5%; Buy 3 or more save 10% T&C </Typography>
                <Typography>➤ 5% Cashback on Axis Bank Card</Typography>

           </SmallText>
           <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#2874f0'}}>SuperComNet</Box> 
                            <Typography>GST invoice available</Typography> 
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>  
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
           </Table>
        </>
    )
}

export default ProductDetail;



