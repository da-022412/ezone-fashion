import Cards from '../../Cards';

import aboutStyles from './About.module.scss';

const CONTENT = {
    title: 'Who is Ezone',
    copy: 'We are known for our expertise in facilitating American companies doing business with Asian manufacturers. More important, we put our buyer attendees at the center of everything we do, and measure our success by their results. Because of this, we’ve successfully developed deep partnerships with manufacturers and with buyers like you, who share our values.',
    cards: [
        {
            title: 'Ezone virtual exhibition',
            copy: 'Organizing online and offline trade shows with operating logistics, warehouses and showroom services.',
        },
        {
            title: 'Trade Business',
            copy: 'Both traditional trading and E-commerce trading. We have resource factories with a wide variety of categories in China and other Asian countries. You also can get samples from our 30+ manufacturers, waiting for your orders.',
        },
        {
            title: 'Warehouse Business',
            copy: 'A one-stop shop platform with 11 warehouses located throughout the USA.',
        },
    ],
};

const About = () => {
    return (
        <main className={`${aboutStyles['about-section']}`} id='about-us'>
            <div
                className={`${aboutStyles['about-container']} ${aboutStyles['text-center']}`}
            >
                <div className={`${aboutStyles['title-container']}`}>
                    <h2 className={`${aboutStyles['heading-2']}`}>
                        {CONTENT.title}
                    </h2>
                    <p className={`${aboutStyles['body-text']}`}>
                        {CONTENT.copy}
                    </p>
                </div>
                <Cards content={CONTENT.cards} />
            </div>
        </main>
    );
};

export default About;
