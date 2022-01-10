import timesStyles from '../styles/Times.module.scss';

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

const Times = () => {
    return (
        <div className={`${timesStyles['times-container']}`}>
            <div className={`${timesStyles['time-container']}`}>
                <div className={`${timesStyles['title-container']}`}>
                    <h3 className={`${timesStyles['heading-3']}`}>
                        Eastern Standard Time
                    </h3>
                </div>
                {eastern.map((x) => (
                    <div className={`${timesStyles['time-list']}`} key={x.id}>
                        <div className={timesStyles.time}>
                            <span className={`${timesStyles['body-text']}`}>
                                {x.date}
                            </span>
                            <span className={`${timesStyles['body-text']}`}>
                                {x.content}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${timesStyles['time-container']}`}>
                <div className={`${timesStyles['title-container']}`}>
                    <h3 className={`${timesStyles['heading-3']}`}>
                        China Standard Time
                    </h3>
                </div>
                {china.map((x) => (
                    <div className={`${timesStyles['time-list']}`} key={x.id}>
                        <div className={timesStyles.time}>
                            <span className={`${timesStyles['body-text']}`}>
                                {x.date}
                            </span>
                            <span className={`${timesStyles['body-text']}`}>
                                {x.content}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Times;
