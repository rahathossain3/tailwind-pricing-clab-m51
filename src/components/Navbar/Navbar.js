import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', link: './home' },
        { id: 2, name: 'Shop', link: './shop' },
        { id: 3, name: 'Deals', link: './deals' },
        { id: 4, name: 'Coupons', link: './coupon' },
        { id: 5, name: 'Contact', link: './contact' },
    ]
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    > </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;