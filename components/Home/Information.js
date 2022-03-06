import Icons from './Icons';

import infoStyles from '../../styles/Info.module.scss';

const Information = () => {
    return (
        <main className={`${infoStyles['info-section']}`}>
            <div
                className={`${infoStyles['info-container']} ${infoStyles['text-center']}`}
            >
                <div className={`${infoStyles['title-container']}`}>
                    <h2 className={`${infoStyles['heading-2']}`}>
                        Access the EZone Network
                    </h2>
                    <p className={`${infoStyles['body-text']}`}>
                        For this, our first Virtual Textiles Exhibition of the
                        year, Ezone Exhibition is inviting 500 of the best
                        manufacturers throughout Asia to meet virtually with
                        buyers under our corporate umbrella, and, together, we
                        are ready to serve your every need.
                    </p>
                    <p className={`${infoStyles['body-text']}`}>
                        Ezone has already verified that each of these factories
                        have good reputations, premium quality, the best prices,
                        and prompt, secure delivery. And as an added bonus,
                        Ezone can provide samples from its eleven domestic
                        warehouses here in the US.
                    </p>
                </div>
                <Icons />
                <div className={`${infoStyles['text-container']}`}>
                    <p className={`${infoStyles['body-text']}`}>
                        Within the Ezone network of manufacturers, capabilities
                        are endless: fabrics, apparel, curtains, carpets,
                        bedding, towels, hotel/hospitality supplies, shoes, hats
                        bags, socks and more. Given the opportunity, we can meet
                        100% of your textile and apparel needs.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Information;
