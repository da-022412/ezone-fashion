import heroStyles from '../styles/Hero.module.scss';

import Link from 'next/link';

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div
                className={`${heroStyles['hero-container']} ${heroStyles['text-center']}`}
            >
                <div className={`${heroStyles['title-container']}`}>
                    <h1 className={`${heroStyles['heading-1']}`}>
                        Ezone Virtual
                        <br />
                        Textile Exhibition
                    </h1>
                    <p className={`${heroStyles['body-text']}`}>
                        Doing business with Asia’s best textile and apparel
                        manufacturers has never been easier! Now, you can meet
                        hundreds of the best of the best, from the comfort and
                        safety of your office, at Ezone’s first Virtual Textiles
                        and Apparel Exhibition of 2022.
                    </p>
                    <h5 className={`${heroStyles['heading-5']}`}>
                        February 22-24, 2022
                    </h5>
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
