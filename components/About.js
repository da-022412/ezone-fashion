import Link from 'next/link';

import Cards from './Cards';

import aboutStyles from '../styles/about.module.scss';

const About = () => {
    return (
        <main className={`${aboutStyles['about-section']}`}>
            <div className={`${aboutStyles['about-container']}`}>
                <div className={`${aboutStyles['title-container']}`}>
                    <h2 className={`${aboutStyles['heading-2']}`}>
                        Lorem ipsum
                        <br />
                        Lorem ipsum
                    </h2>
                    <p className={`${aboutStyles['body-text']}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris in massa id tortor vulputate sollicitudin.
                        Vestibulum malesuada metus eros, at gravida quam
                        hendrerit at. Aenean ut rhoncus sem, id efficitur leo.
                    </p>
                </div>
                <Cards />
                <div className={`${aboutStyles['btn-container']}`}>
                    <div className={`${aboutStyles['secondary-btn']}`}>
                        <Link href='#'>
                            <a className={`${aboutStyles['link-text']}`}>
                                Learn more about EZone-US
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
