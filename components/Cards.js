import Image from 'next/image';

import cardStyles from '../styles/Cards.module.scss';

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

const Cards = () => {
    return (
        <div className={cardStyles.cards}>
            {cards.map((x) => (
                <div className={`${cardStyles['cards-container']}`}>
                    <div
                        className={`${cardStyles['card-container']}`}
                        key={x.id}
                    >
                        <h3 className={`${cardStyles['heading-3']}`}>
                            {x.title}
                        </h3>
                        <p className={`${cardStyles['body-text']}`}>{x.copy}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
