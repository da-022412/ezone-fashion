import Image from 'next/image';

import eventStyles from './Event.module.scss';

import Img from '../../../assets/images/ezone-textile-virtual.jpg';

import Heading from '../../Heading';
import BodyText from '../../BodyText';

const CONTENT = {
    title: 'March 22-24, 2022',
    image: Img,
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
                <BodyText>
                    Doing business with Asia&apos;s best textile and apparel
                    manufacturers has never been easier! Now, you can meet
                    hundreds of the best of the best, from the comfort and
                    safety of your office, at Ezone&apos;s first Virtual
                    Textiles and Apparel Exhibition of 2022.
                </BodyText>
                <Image
                    src={CONTENT.image}
                    width={1677}
                    height={921}
                    alt='Ezone Virtual Event'
                />
            </section>
        </section>
    );
};

export default Event;
