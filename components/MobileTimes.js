import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import timesStyles from '../styles/Times.module.scss';

SwiperCore.use([Navigation]);

const MobileTimes = ({ eastern, china }) => {
    return (
        <>
            <Swiper className={`${timesStyles['times-container']}`}>
                <SwiperSlide>
                    <div className={timesStyles.time}>
                        <div className={`${timesStyles['time-container']}`}>
                            <div
                                className={`${timesStyles['title-container']}`}
                            >
                                <h3 className={`${timesStyles['heading-3']}`}>
                                    Eastern Standard Time
                                </h3>
                            </div>
                            {eastern.map((x) => (
                                <div
                                    className={`${timesStyles['time-list']}`}
                                    key={x.id}
                                >
                                    <span
                                        className={`${timesStyles['body-text']}`}
                                    >
                                        {x.date}
                                    </span>
                                    <span
                                        className={`${timesStyles['body-text']}`}
                                    >
                                        {x.content}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={timesStyles.time}>
                        <div className={`${timesStyles['time-container']}`}>
                            <div
                                className={`${timesStyles['title-container']}`}
                            >
                                <h3 className={`${timesStyles['heading-3']}`}>
                                    China Standard Time
                                </h3>
                            </div>
                            {china.map((x) => (
                                <div
                                    className={`${timesStyles['time-list']}`}
                                    key={x.id}
                                >
                                    <span
                                        className={`${timesStyles['body-text']}`}
                                    >
                                        {x.date}
                                    </span>
                                    <span
                                        className={`${timesStyles['body-text']}`}
                                    >
                                        {x.content}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default MobileTimes;
