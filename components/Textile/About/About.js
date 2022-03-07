import Cards from './Cards';

import aboutStyles from './About.module.scss';

const About = () => {
    return (
        <main className={`${aboutStyles['about-section']}`} id='about-us'>
            <div
                className={`${aboutStyles['about-container']} ${aboutStyles['text-center']}`}
            >
                <div className={`${aboutStyles['title-container']}`}>
                    <h2 className={`${aboutStyles['heading-2']}`}>
                        Who is Ezone
                    </h2>
                    <p className={`${aboutStyles['body-text']}`}>
                        We are known for our expertise in facilitating American
                        companies doing business with Asian manufacturers. More
                        important, we put our buyer attendees at the center of
                        everything we do, and measure our success by their
                        results. Because of this, we’ve successfully developed
                        deep partnerships with manufacturers and with buyers
                        like you, who share our values.
                    </p>
                </div>
                <Cards />
            </div>
        </main>
    );
};

export default About;
