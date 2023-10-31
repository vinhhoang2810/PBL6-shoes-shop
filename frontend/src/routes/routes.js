import config from '~/config';

import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import ContactUs from '~/pages/ContactUs';
import Dashboard from '~/pages/Dashboard';
import Home from '~/pages/Home';
import MyAccount from '~/pages/MyAccount';
import OrderHistory from '~/pages/OrderHistory';
import ProductDetail from '~/pages/ProductDetail';
import Products from '~/pages/Products';
import Shop from '~/pages/Shop';

// public router
const publicRoutes = [
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.contact_us, component: ContactUs },
    { path: config.routes.dashboard, component: Dashboard },
    { path: config.routes.home, component: Home },
    { path: config.routes.my_account, component: MyAccount },
    { path: config.routes.order_history, component: OrderHistory },
    { path: config.routes.product_detail, component: ProductDetail },
    { path: config.routes.products, component: Products },
    { path: config.routes.shop, component: Shop },
];

// private router
const privateRoutes = [];

export { publicRoutes, privateRoutes };
