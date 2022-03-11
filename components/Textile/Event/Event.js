import eventStyles from './Event.module.scss';

import Heading from '../../Heading';
import BodyText from '../../BodyText';

const CONTENT = {
    title: 'March 22-24, 2022',
    copy: 'Doing business with Asia&apos;s best textile and apparel manufacturers has never been easier! Now, you can meet hundreds of the best of the best, from the comfort and safety of your office, at Ezone&apos;s first Virtual Textiles and Apparel Exhibition of 2022.',
};

const Event = () => {
    return (
        <section className={`${eventStyles['event-section']}`}>
            <section
                className={`${eventStyles['event-container']} ${eventStyles['text-center']}`}
            >
                <Heading level='2' style='heading-2'>
                    {CONTENT.title}
                </Heading>
                <BodyText>{CONTENT.copy}</BodyText>
                <video
                    autoPlay
                    muted
                    loop
                    className={`${eventStyles['event-video']}`}
                    id='heroVideo'
                >
                    <source src='/videos/venue-exterior.mp4' type='video/mp4' />
                </video>
            </section>
        </section>
    );
};

export default Event;
