import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductsTable = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store);

    console.log('products -> ', products);

    useEffect(() => {
        const data = {
            colors: [],
            sizes: [],
            minPrice: null,
            maxPrice: null,
            minDiscount: 0,
            brand: null,
            stock: null,
            sort: 'price_low',
            pageNumber: 1,
            pageSize: 10,
        };
        // In State Component
        // dispatch(findProduct(data));
    }, []);
    return (
        <div>
            <TableContainer component={Paper} variant="outlined">
                <Table aria-label="demo table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ddddddddddDessert</TableCell>
                            <TableCell>Calories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Frozen yoghurt</TableCell>
                            <TableCell>109</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Cupcake</TableCell>
                            <TableCell>305</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ProductsTable;
