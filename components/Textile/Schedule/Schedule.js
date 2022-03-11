import { useState, useCallback, useEffect } from 'react';

import Times from './Times';
import MobileTimes from './MobileTimes';

import scheduleStyles from './Schedule.module.scss';

import Heading from '../../Heading';

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

const Schedule = ({ content }) => {
    const isBreakpoint = useMediaQuery(767);
    return (
        <section
            className={`${scheduleStyles['schedule-section']}`}
            id='event-info'
        >
            <div
                className={`${scheduleStyles['schedule-container']} ${scheduleStyles['text-center']}`}
            >
                <div className={`${scheduleStyles['title-container']}`}>
                    <Heading level='2' style='heading-2'>
                        Event Schedule
                    </Heading>
                </div>
                {isBreakpoint ? (
                    <MobileTimes
                        eastern={content.time.eastern}
                        china={content.time.china}
                    />
                ) : (
                    <Times
                        eastern={content.time.eastern}
                        china={content.time.china}
                    />
                )}
            </div>
        </section>
    );
};

export default Schedule;
