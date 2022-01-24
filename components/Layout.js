import { Fragment, useState, useCallback, useEffect } from 'react';
import Head from 'next/head';

import Footer from './Layout/Footer';
import Header from './Layout/Header';
import MobileHeader from './Layout/MobileHeader';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

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
        title: 'Manufacturers List',
        slug: '#manufacturers-list',
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
    const isBreakpoint = useMediaQuery(980);
    return (
        <>
            <Head>
                <title>E-Zone US</title>
                <meta name='description' content='E-Zone US' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {isBreakpoint ? (
                <MobileHeader links={links} />
            ) : (
                <Header links={links} />
            )}
            <Fragment>{children}</Fragment>
            <Footer />
        </>
    );
};

export default Layout;
