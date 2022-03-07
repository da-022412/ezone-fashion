import Icons from './Icons';

import Heading from '../../Heading';
import BodyText from '../../BodyText';

import infoStyles from './Info.module.scss';

const CONTENT = {
    icons: [
        {
            img: '/images/colored-thread-bulk.jpg',
            width: 160,
            height: 160,
            title: 'Textile',
        },
        {
            img: '/images/young-man-rain-coat.jpg',
            width: 160,
            height: 160,
            title: 'Mens',
        },
        {
            img: '/images/shades-sundress.jpg',
            width: 160,
            height: 160,
            title: 'Womens',
        },
        {
            img: '/images/upside-down-in-bathtub.jpg',
            width: 160,
            height: 160,
            title: 'Shoes',
        },
        {
            img: '/images/croc-skin-purse.jpg',
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
};

const Information = () => {
    return (
        <main className={`${infoStyles['info-section']}`}>
            <div
                className={`${infoStyles['info-container']} ${infoStyles['text-center']}`}
            >
                <div className={`${infoStyles['title-container']}`}>
                    <Heading style='heading-2' level='2'>
                        {CONTENT.title}
                    </Heading>
                    {CONTENT.topCopy.map(({ copy }, index) => (
                        <BodyText key={index}>{copy}</BodyText>
                    ))}
                </div>
                <Icons items={CONTENT.icons} />
                <div className={`${infoStyles['text-container']}`}>
                    <BodyText>{CONTENT.btmCopy}</BodyText>
                </div>
            </div>
        </main>
    );
};

export default Information;
