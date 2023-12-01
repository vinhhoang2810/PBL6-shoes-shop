import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './ProductsTable.module.scss';

import { findProducts } from '~/states/Product/Action';

const ProductsTable = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store);
    const jwt = localStorage.getItem('jwt');
    console.log('products: ', products?.products?.content);

    useEffect(() => {
        const data = {
            color: [],
            size: [],
            minPrice: 0,
            maxPrice: 10000000,
            minDiscount: 0,
            brand: [],
            stock: null,
            sort: 'price_low',
            pageNumber: 0,
            pageSize: 10,
        };

        dispatch(findProducts(data));
    }, [jwt, dispatch]);
    return (
        <div>
            <TableContainer component={Paper} variant="outlined">
                <Table aria-label="demo table">
                    <TableHead>
                        <TableRow>
                            <TableCell>brand</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>description</TableCell>
                            <TableCell>price</TableCell>
                            <TableCell>discountedPrice</TableCell>
                            <TableCell>discountPersent</TableCell>
                            <TableCell>color</TableCell>
                            <TableCell>sizes</TableCell>
                            <TableCell>imageUrl</TableCell>
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
