import { useState, useCallback, useEffect } from 'react';

import MainCards from './MainCards';
import MobileCards from './MobileCards';

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

const CONTENT = [
    {
        title: 'Ezone virtual exhibition',
        copy: 'Organizing online and offline trade shows with operating logistics, warehouses and showroom services.',
    },
    {
        title: 'Trade Business',
        copy: 'Both traditional trading and E-commerce trading. We have resource factories with a wide variety of categories in China and other Asian countries. You also can get samples from our 30+ manufacturers, waiting for your orders.',
    },
    {
        title: 'Warehouse Business',
        copy: 'A one-stop shop platform with 11 warehouses located throughout the USA.',
    },
];

const Cards = () => {
    const isBreakpoint = useMediaQuery(980);

    return isBreakpoint ? (
        <MobileCards items={CONTENT} />
    ) : (
        <MainCards items={CONTENT} />
    );
};

export default Cards;
