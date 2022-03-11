import Icons from './Icons';

import Heading from '../Heading';
import BodyText from '../BodyText';

import infoStyles from './Info.module.scss';

const Information = ({ content }) => {
    return (
        <main className={`${infoStyles['info-section']}`}>
            <div
                className={`${infoStyles['info-container']} ${infoStyles['text-center']}`}
            >
                <div className={`${infoStyles['title-container']}`}>
                    <Heading style='heading-2' level='2'>
                        {content.title}
                    </Heading>
                    {content.topCopy.map(({ copy }, index) => (
                        <BodyText key={index}>{copy}</BodyText>
                    ))}
                </div>
                <Icons items={content.icons} />
                <div className={`${infoStyles['text-container']}`}>
                    <BodyText>{content.btmCopy}</BodyText>
                </div>
            </div>
        </main>
    );
};

export default Information;
