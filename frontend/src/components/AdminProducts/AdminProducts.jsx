import React, { Fragment } from 'react';

import Icon from '../Icons/Icon';
import ProductsTable from '../ProductsTable/ProductsTable';

const AdminProducts = () => {
    return (
        <Fragment>
            <header className={`align-items-center d-flex p-2`}>
                <Icon icon="products" classes={`ml-2`} />
                <h5 className={`mb-0 ml-4`}>Admin Products</h5>
            </header>
            <ProductsTable />
        </Fragment>
    );
};

export default AdminProducts;
