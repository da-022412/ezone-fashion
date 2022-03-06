import cardStyles from './Cards.module.scss';

const MainCards = ({ items }) => {
    return (
        <div className={cardStyles.cards}>
            {items.map(({ title, copy }, index) => (
                <div className={`${cardStyles['cards-container']}`} key={index}>
                    <div className={`${cardStyles['card-container']}`}>
                        <h3 className={`${cardStyles['heading-3']}`}>
                            {title}
                        </h3>
                        <p className={`${cardStyles['body-text']}`}>{copy}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainCards;
