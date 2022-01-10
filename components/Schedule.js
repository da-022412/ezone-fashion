import Link from 'next/link';

import Times from './Times';

import scheduleStyles from '../styles/Schedule.module.scss';

const Schedule = () => {
    return (
        <section className={`${scheduleStyles['schedule-section']}`}>
            <div className={`${scheduleStyles['schedule-container']}`}>
                <div className={`${scheduleStyles['title-container']}`}>
                    <h2 className={`${scheduleStyles['heading-2']}`}>
                        Event Schedule
                    </h2>
                </div>
                <Times />
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
