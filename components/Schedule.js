import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

import Times from './Times';
import MobileTimes from './MobileTimes';

import scheduleStyles from '../styles/Schedule.module.scss';

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

const eastern = [
    {
        id: 0,
        date: '02/22/22',
        content: '08:30 am - 17:30 pm',
    },
    {
        id: 1,
        date: '02/22/22',
        content: '08:30 am - 17:30 pm',
    },
    {
        id: 2,
        date: '02/22/22',
        content: '08:30 am - 17:30 pm',
    },
];

const china = [
    {
        id: 0,
        date: '02/22/22',
        content: '08:30 am - 17:30 pm',
    },
    {
        id: 1,
        date: '02/22/22',
        content: '08:30 am - 17:30 pm',
    },
    {
        id: 2,
        date: '02/22/22',
        content: '08:30 am - 17:30 pm',
    },
];

const Schedule = () => {
    const isBreakpoint = useMediaQuery(980);
    return (
        <section className={`${scheduleStyles['schedule-section']}`}>
            <div
                className={`${scheduleStyles['schedule-container']} ${scheduleStyles['text-center']}`}
            >
                <div className={`${scheduleStyles['title-container']}`}>
                    <h2 className={`${scheduleStyles['heading-2']}`}>
                        Event Schedule
                    </h2>
                </div>
                {isBreakpoint ? (
                    <MobileTimes eastern={eastern} china={china} />
                ) : (
                    <Times eastern={eastern} china={china} />
                )}
                <div className={`${scheduleStyles['btn-container']}`}>
                    <div className={`${scheduleStyles['secondary-btn']}`}>
                        <Link href='#'>
                            <a className={`${scheduleStyles['link-text']}`}>
                                Register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
