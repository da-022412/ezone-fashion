import heroStyles from './Hero.module.scss';

import Heading from '../../Heading';

const Title = ({ content }) => {
    return (
        <div className={`${heroStyles['title-container']}`}>
            <Heading level='1' style='heading-1'>
                {content.title}
            </Heading>
        </div>
    );
};

export default Title;
