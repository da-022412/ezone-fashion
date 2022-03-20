import Modal from '../../components/Modal';
import Hero from '../../components/Hero';
import Countdown from '../../components/Countdown';
import Event from '../../components/Event';
import Information from '../../components/Information';
import Schedule from '../../components/Schedule';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';
import Register from '../../components/Register';

export default function Textile() {
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
            <Modal />
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
        title: 'Ezone Virtual<br>Textile Exhibition',
        video: '/videos/ezone-virtual-video.mp4',
    },
    countdown: {
        date: 'Mar 21, 2022 23:59:59',
    },
    event: {
        title: 'March 22-24, 2022',
        copy: 'Doing business with Asia&apos;s best textile and apparel manufacturers has never been easier! Now, you can meet hundreds of the best of the best, from the comfort and safety of your office, at Ezone&apos;s first Virtual Textiles and Apparel Exhibition of 2022.',
    },
    info: {
        icons: [
            {
                img: '/images/colored-thread-bulk.webp',
                width: 160,
                height: 160,
                title: 'Textile',
            },
            {
                img: '/images/young-man-rain-coat.webp',
                width: 160,
                height: 160,
                title: 'Mens',
            },
            {
                img: '/images/shades-sundress.webp',
                width: 160,
                height: 160,
                title: 'Womens',
            },
            {
                img: '/images/upside-down-in-bathtub.webp',
                width: 160,
                height: 160,
                title: 'Shoes',
            },
            {
                img: '/images/croc-skin-purse.webp',
                width: 160,
                height: 160,
                title: 'Accessories',
            },
        ],
        title: 'Access the EZone Network',
        topCopy: [
            {
                copy: 'For this, our first Virtual Textiles Exhibition of the year, Ezone Exhibition is inviting 500 of the best manufacturers throughout Asia to meet virtually with buyers under our corporate umbrella, and, together, we are ready to serve your every need.',
            },
            {
                copy: 'Ezone has already verified that each of these factories have good reputations, premium quality, the best prices, and prompt, secure delivery. And as an added bonus, Ezone can provide samples from its eleven domestic warehouses here in the US.',
            },
        ],
        btmCopy:
            'Within the Ezone network of manufacturers, capabilities are endless: fabrics, apparel, curtains, carpets, bedding, towels, hotel/hospitality supplies, shoes, hats bags, socks and more. Given the opportunity, we can meet 100% of your textile and apparel needs.',
    },
    schedule: {
        time: {
            eastern: [
                {
                    date: '03/22/22',
                    content: '08:30 am - 05:30 pm',
                },
                {
                    date: '03/23/22',
                    content: '08:30 am - 05:30 pm',
                },
                {
                    date: '03/24/22',
                    content: '08:30 am - 05:30 pm',
                },
            ],

            china: [
                {
                    date: '03/22/22',
                    content: '08:30 pm - 05:30 am',
                },
                {
                    date: '03/23/22',
                    content: '08:30 pm - 05:30 am',
                },
                {
                    date: '03/24/22',
                    content: '08:30 pm - 05:30 am',
                },
            ],
        },
    },
};
