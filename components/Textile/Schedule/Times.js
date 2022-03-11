import timesStyles from './Schedule.module.scss';

const Times = ({ content }) => {
    return (
        <div className={`${timesStyles['times-container']}`}>
            <div className={timesStyles.time}>
                <div className={`${timesStyles['time-container']}`}>
                    <div className={`${timesStyles['title-container']}`}>
                        <h3 className={`${timesStyles['heading-3']}`}>
                            Eastern Standard Time
                        </h3>
                    </div>
                    {content.eastern.map(({ date, content }, index) => (
                        <div
                            className={`${timesStyles['time-list']}`}
                            key={index}
                        >
                            <span className={`${timesStyles['body-text']}`}>
                                {date}
                            </span>
                            <span className={`${timesStyles['body-text']}`}>
                                {content}
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
                    {content.china.map(({ date, content }, index) => (
                        <div
                            className={`${timesStyles['time-list']}`}
                            key={index}
                        >
                            <span className={`${timesStyles['body-text']}`}>
                                {date}
                            </span>
                            <span className={`${timesStyles['body-text']}`}>
                                {content}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Times;
