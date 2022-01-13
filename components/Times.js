import timesStyles from '../styles/Times.module.scss';

const Times = ({ eastern, china }) => {
    return (
        <div className={`${timesStyles['times-container']}`}>
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
        </div>
    );
};

export default Times;
