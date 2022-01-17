import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import timesStyles from '../styles/Times.module.scss';

const MobileTimes = ({ eastern, china }) => {
    return (
        <Tabs>
            <TabList className={`${timesStyles['time-tabs']}`}>
                <style global jsx>{`
                    .react-tabs__tab--selected {
                        background-color: #000;
                        border: 1px solid #000;
                        border-radius: 40px;
                        color: #fff;
                        font-family: 'Montserrat', sans-serif;
                        padding: 1rem;
                    }
                `}</style>
                <Tab className={`${timesStyles['time-tab']}`}>
                    Eastern Standard Time
                </Tab>
                <Tab className={`${timesStyles['time-tab']}`}>
                    China Standard Time
                </Tab>
            </TabList>

            <TabPanel className={timesStyles.time}>
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
            </TabPanel>
            <TabPanel className={timesStyles.time}>
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
            </TabPanel>
        </Tabs>
    );
};

export default MobileTimes;
