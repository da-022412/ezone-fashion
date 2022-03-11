import Hero from '../../components/Hero';
import Countdown from '../../components/Countdown';
import Event from '../../components/Event';
import Information from '../../components/Information';
import Schedule from '../../components/Schedule';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';
import Register from '../../components/Register';

export default function Electronics() {
    return (
        <>
            <style global jsx>{`
                body,
                html {
                    margin: 0;
                    max-width: 100vw;
                    min-height: 100vh;
                    padding: 0;
                    scroll-behavior: smooth;
                }
            `}</style>
            <Hero content={CONTENT.hero} />
            <Countdown content={CONTENT.countdown} />
            <Event content={CONTENT.event} />
            <Information content={CONTENT.info} />
            <Schedule content={CONTENT.schedule} />
            <Testimonials />
            <About />
            <Register />
        </>
    );
}

const CONTENT = {
    hero: {
        title: 'Ezone Virtual<br>Electronics Products Exhibition',
        video: '/videos/ezone-virtual-electronics.mp4',
    },
    countdown: {
        date: 'Apr 25, 2022 23:59:59',
    },
    event: {
        title: 'April 26-28, 2022',
        copy: 'Doing business with Asia’s best electronics manufacturers has never been easier!  Now you can meet hundreds of the best of the best, from the comfort and safety of your office, at Ezone’s first Virtual Electronic Products Exhibition of 2022.',
    },
    info: {
        icons: [
            {
                img: '/images/watch.jpg',
                width: 160,
                height: 160,
                title: 'Watches',
            },
            {
                img: '/images/smartphone.jpg',
                width: 160,
                height: 160,
                title: 'Smartphones',
            },
            {
                img: '/images/tv.jpg',
                width: 160,
                height: 160,
                title: 'TVs',
            },
            {
                img: '/images/phone.jpg',
                width: 160,
                height: 160,
                title: 'Phones',
            },
            {
                img: '/images/dvd.jpg',
                width: 160,
                height: 160,
                title: 'DVD Players',
            },
        ],
        title: 'Access the EZone Network',
        topCopy: [
            {
                copy: 'For this, our first Virtual Electronics Exhibition of the year, Ezone Exhibition is inviting 500 of the best manufacturers throughout Asia to meet virtually with buyers under our corporate umbrella, and together, we are ready to serve your every need.',
            },
            {
                copy: 'Ezone has already verified that all of these factories have good reputations, premium quality, the best prices, and prompt, secure delivery.  As an added bonus, Ezone can provide samples from its eleven domestic warehouses here in the US.',
            },
        ],
        btmCopy:
            'Within the Ezone network of manufacturers, the scope of electronic products available is nearly endless:  watches, smart phones, telephones, TVs, DVD players (VCD, SVCD, DVD), video recorders, camcorders, radios, combination speakers, computers, game consoles, mobile communication products and more.  Given the opportunity, we can meet 100% of your electronics needs.',
    },
    schedule: {
        time: {
            eastern: [
                {
                    date: '03/22/22',
                    content: '08:30 am - 17:30 pm',
                },
                {
                    date: '03/23/22',
                    content: '08:30 am - 17:30 pm',
                },
                {
                    date: '03/24/22',
                    content: '08:30 am - 17:30 pm',
                },
            ],

            china: [
                {
                    date: '03/22/22',
                    content: '20:30 pm - 05:30 am',
                },
                {
                    date: '03/23/22',
                    content: '20:30 pm - 05:30 am',
                },
                {
                    date: '03/24/22',
                    content: '20:30 pm - 05:30 am',
                },
            ],
        },
    },
};
