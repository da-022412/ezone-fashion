import Link from 'next/link';

import Icons from './Icons';

import infoStyles from '../styles/Info.module.scss';

const Information = () => {
    return (
        <main className={`${infoStyles['info-section']}`}>
            <div className={`${infoStyles['info-container']}`}>
                <div className={`${infoStyles['title-container']}`}>
                    <h2 className={`${infoStyles['heading-2']}`}>
                        Lorem ipsum
                        <br />
                        Lorem ipsum
                    </h2>
                    <p className={`${infoStyles['body-text']}`}>
                        We put our attendees at the center of everything we do.
                        We measure our success by their results. By doing this,
                        we have successfully developed deep partnerships with
                        manufacturers and buyers who share our values. Ezone
                        Exhibition is inviting 500 best manufacturers throughout
                        Asia under our corporate umbrella, ready to serve your
                        every need. And all these factories have been verified
                        to have good reputation, premium quality, best price,
                        prompt delivery time, and it’s always easy to ask for
                        samples from our 11 warehouses located throughout the
                        USA.
                    </p>
                    <p className={`${infoStyles['body-text']}`}>
                        These factories’ manufacturing capabilities are endless:
                        Fabrics, apparels, curtains, carpets, bedding, cloth,
                        hotel suppliers, shoes, hats, bags, socks, towels etc).
                        If given the opportunity, we can meet 100% of what your
                        needs.
                    </p>
                </div>
                <Icons />
                <div className={`${infoStyles['btn-container']}`}>
                    <div className={`${infoStyles['secondary-btn']}`}>
                        <Link href='#'>
                            <a className={`${infoStyles['link-text']}`}>
                                See all the Manufacturers
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Information;
