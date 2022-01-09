import { Fragment } from 'react';

import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';

const links = [
    {
        id: 0,
        title: 'Event Info',
        slug: '#event-info',
    },
    {
        id: 1,
        title: 'About Us',
        slug: '#about-us',
    },
    {
        id: 2,
        title: 'Manufactures List',
        slug: '#manufactures-list',
    },
    {
        id: 3,
        title: 'Log In',
        slug: '#log-in',
    },
    {
        id: 4,
        title: 'Register',
        slug: '#register',
    },
];

const Layout = ({ children }) => {
    return (
        <Fragment>
            <NavBar
                links={links}
            />
            <Fragment>{children}</Fragment>
            <Footer/>
        </Fragment>
    );
};

export default Layout;