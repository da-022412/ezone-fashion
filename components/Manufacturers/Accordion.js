import React, { useState } from 'react';

import accordionStyles from '../../styles/Accordion.module.scss';

const Accordion = ({ apiData, categories, i }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className={`${accordionStyles['accordion-item']}`}>
                <div
                    className={`${accordionStyles['accordion-title']}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <h2 className={`${accordionStyles['heading-2']}`}>
                        {categories[i]}
                        <span>{isActive ? ' -' : ' +'}</span>
                    </h2>
                </div>
                {isActive && (
                    <div className={`${accordionStyles.panel}`}>
                        {apiData.map((x, y) =>
                            x.category === categories[i] ? (
                                <div
                                    className={`${accordionStyles['panel-content']}`}
                                    key={y}
                                >
                                    <p
                                        className={`${accordionStyles['body-text']}`}
                                    >
                                        {x.name}
                                    </p>
                                    <p
                                        className={`${accordionStyles['body-text']}`}
                                    >
                                        {x.web}
                                    </p>
                                </div>
                            ) : null
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Accordion;
