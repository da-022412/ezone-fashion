import React, { useState } from 'react';

import timesStyles from './Schedule.module.scss';

const MobileTimes = ({ eastern, china }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className={`${timesStyles['time-tabs']}`}>
                <div
                    className={
                        isActive
                            ? `${timesStyles['time-tab']}`
                            : `${timesStyles['time-tab-inactive']}`
                    }
                    onClick={() => setIsActive(!isActive)}
                >
                    Eastern Standard Time
                </div>
                <div
                    className={
                        isActive
                            ? `${timesStyles['time-tab']}`
                            : `${timesStyles['time-tab-inactive']}`
                    }
                    onClick={() => setIsActive(!isActive)}
                >
                    China Standard Time
                </div>
            </div>
            {isActive ? (
                <div className={timesStyles.time}>
                    <div className={`${timesStyles['time-container']}`}>
                        <div className={`${timesStyles['title-container']}`}>
                            <h3 className={`${timesStyles['heading-3']}`}>
                                Eastern Standard Time
                            </h3>
                        </div>
                        {eastern.map((x) => (
                            <div
                                className={`${timesStyles['time-list']}`}
                                key={x.id}
                            >
                                <span className={`${timesStyles['body-text']}`}>
                                    {x.date}
                                </span>
                                <span className={`${timesStyles['body-text']}`}>
                                    {x.content}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={timesStyles.time}>
                    <div className={`${timesStyles['time-container']}`}>
                        <div className={`${timesStyles['title-container']}`}>
                            <h3 className={`${timesStyles['heading-3']}`}>
                                China Standard Time
                            </h3>
                        </div>
                        {china.map((x) => (
                            <div
                                className={`${timesStyles['time-list']}`}
                                key={x.id}
                            >
                                <span className={`${timesStyles['body-text']}`}>
                                    {x.date}
                                </span>
                                <span className={`${timesStyles['body-text']}`}>
                                    {x.content}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileTimes;
