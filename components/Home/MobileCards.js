import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

import 'swiper/css';
import 'swiper/css/pagination';
import cardStyles from '../../styles/Cards.module.scss';

const MobileCards = ({ cards }) => {
    return (
        <Swiper
            pagination={true}
            spaceBetween={4}
            breakpoints={{
                300: {
                    slidesPerView: 1.15,
                },
                600: {
                    slidesPerView: 2,
                },
            }}
        >
            <style global jsx>{`
                .swiper {
                    overflow: visible;
                }
                .swiper-pagination {
                    transform: translate(0, 40px);
                }
                .swiper-pagination-bullet-active {
                    background: #000;
                }
            `}</style>
            <div className={cardStyles.cards}>
                {cards.map((x) => (
                    <SwiperSlide key={x.id}>
                        <div className={`${cardStyles['cards-container']}`}>
                            <div className={`${cardStyles['card-container']}`}>
                                <h3 className={`${cardStyles['heading-3']}`}>
                                    {x.title}
                                </h3>
                                <p className={`${cardStyles['body-text']}`}>
                                    {x.copy}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};

export default MobileCards;
