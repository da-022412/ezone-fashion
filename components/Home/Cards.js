import cardStyles from '../../styles/Cards.module.scss';

const Cards = ({ cards }) => {
    return (
        <div className={cardStyles.cards}>
            {cards.map((x) => (
                <div className={`${cardStyles['cards-container']}`} key={x.id}>
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
