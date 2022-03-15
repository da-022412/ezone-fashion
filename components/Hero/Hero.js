import heroStyles from './Hero.module.scss';

import Heading from '../Heading';
import Button from '../Button';

const Hero = ({ content }) => {
    return (
        <>
            <section className={heroStyles.hero}>
                <div
                    className={`${heroStyles['hero-container']} ${heroStyles['text-center']}`}
                >
                    <div className={`${heroStyles['title-container']}`}>
                        <Heading level='1' style='heading-1'>
                            {content.title}
                        </Heading>
                        {content.subtitle ? (
                            <Heading level='3' style='heading-3'>
                                {content.subtitle}
                            </Heading>
                        ) : null}
                        {content.copy ? (
                            <Heading level='4' style='heading-4'>
                                {content.copy}
                            </Heading>
                        ) : null}
                    </div>
                    <Button style='primary-btn' link='#register'>
                        Register
                    </Button>
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    className={`${heroStyles['hero-video']}`}
                    id='heroVideo'
                >
                    <source src={content.video} type='video/mp4' />
                </video>
                <div className={`${heroStyles['hero-overlay']}`}></div>
            </section>
        </>
    );
};

export default Hero;
