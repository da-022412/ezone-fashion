import heroStyles from './Hero.module.scss';

import Title from './Title';
import Button from '../../Button';

const CONTENT = {
    title: 'Ezone Virtual<br>Textile Exhibition',
};

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div
                className={`${heroStyles['hero-container']} ${heroStyles['text-center']}`}
            >
                <Title content={CONTENT} />
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
                <source
                    src='/videos/ezone-virtual-video.mp4'
                    type='video/mp4'
                />
            </video>
        </section>
    );
};

export default Hero;
