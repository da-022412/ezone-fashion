import { useState, useCallback, useEffect } from 'react';

import Cards from './Cards';
import MobileCards from './MobileCards';

import aboutStyles from '../../styles/About.module.scss';

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

const cards = [
    {
        id: 0,
        title: 'Ezone virtual exhibition',
        copy: 'Organizing online and offline trade shows with operating logistics, warehouses and showroom services.',
    },
    {
        id: 1,
        title: 'Trade Business',
        copy: 'Both traditional trading and E-commerce trading. We have resource factories with a wide variety of categories in China and other Asian countries. You also can get samples from our 30+ manufacturers, waiting for your orders.',
    },
    {
        id: 2,
        title: 'Warehouse Business',
        copy: 'A one-stop shop platform with 11 warehouses located throughout the USA.',
    },
];

const About = () => {
    const isBreakpoint = useMediaQuery(980);
    return (
        <main className={`${aboutStyles['about-section']}`} id='about-us'>
            <div
                className={`${aboutStyles['about-container']} ${aboutStyles['text-center']}`}
            >
                <div className={`${aboutStyles['title-container']}`}>
                    <h2 className={`${aboutStyles['heading-2']}`}>
                        Who is Ezone
                    </h2>
                    <p className={`${aboutStyles['body-text']}`}>
                        We are known for our expertise in facilitating American
                        companies doing business with Asian manufacturers. More
                        important, we put our buyer attendees at the center of
                        everything we do, and measure our success by their
                        results. Because of this, we’ve successfully developed
                        deep partnerships with manufacturers and with buyers
                        like you, who share our values.
                    </p>
                </div>
                {isBreakpoint ? (
                    <MobileCards cards={cards} />
                ) : (
                    <Cards cards={cards} />
                )}
            </div>
        </main>
    );
};

export default About;
