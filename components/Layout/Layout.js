import { Fragment, useState, useCallback, useEffect } from 'react';
import Head from 'next/head';

import Header from './Header';
import MobileHeader from './MobileHeader';

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
        media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};

const links = [
    {
        id: 0,
        title: 'Event Info',
        slug: '/textile/#event-info',
    },
    {
        id: 1,
        title: 'About Us',
        slug: '/textile/#about-us',
    },
    {
        id: 2,
        title: 'Login',
        slug: 'https://www.ezone-us.com/en/login',
    },
    {
        id: 3,
        title: 'Register',
        slug: '/textile/#register',
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
        </>
    );
};

export default Layout;
