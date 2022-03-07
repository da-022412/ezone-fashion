import heroStyles from './Hero.module.scss';

import Heading from '../../Heading';
import BodyText from '../../BodyText';

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div
                className={`${heroStyles['hero-container']} ${heroStyles['text-center']}`}
            >
                <div className={`${heroStyles['title-container']}`}>
                    <Heading level='1' style='heading-1'>
                        Meet our Manufacturers
                    </Heading>
                    <BodyText>
                        We’ve developed deep partnerships with the best
                        manufactururers from China and throughout the rest of
                        Asia, and their collective capabilities are extensive.
                        See below, to see all of our featured manufacturers in
                        key product categories.
                    </BodyText>
                </div>
            </div>
        </section>
    );
};

export default Hero;
