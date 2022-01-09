import heroStyles from '../styles/Hero.module.scss';

import Link from 'next/link';

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div className={`${heroStyles['hero-container']}`}>
                <div className={`${heroStyles['title-container']}`}>
                    <h1 className={`${heroStyles['heading-1']}`}>
                        Ezone Virtual
                        <br />
                        Textile Exhibition
                    </h1>
                    <p className={`${heroStyles['body-text']}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris in massa id tortor vulputate sollicitudin.
                        Vestibulum malesuada metus eros, at gravida quam
                        hendrerit at. Aenean ut rhoncus sem, id efficitur leo.
                    </p>
                </div>
                <div className={`${heroStyles['btn-container']}`}>
                    <div className={`${heroStyles['primary-btn']}`}>
                        <Link href='#'>
                            <a className={`${heroStyles['link-text']}`}>
                                Register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
