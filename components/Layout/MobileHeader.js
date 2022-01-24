import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import headerStyles from '../../styles/Header.module.scss';
import navStyles from '../../styles/Nav.module.scss';

import Logo from '../../assets/images/ezone-us-logo.png';
import Hamburger from '../../assets/images/outline-menu-black.png';

const MobileHeader = ({ links }) => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className={`${headerStyles['header-container']}`}>
                    <figure className={headerStyles.logo}>
                        <Link href='/'>
                            <a>
                                <Image src={Logo} width={90} height={45} />
                            </a>
                        </Link>
                    </figure>
                    <figure
                        className={headerStyles.menu}
                        onClick={() => mobileNav()}
                    >
                        <Image src={Hamburger} width={24} height={24} />
                    </figure>
                </div>
                <nav className={`${navStyles['mobile-nav']}`} id='mobile-nav'>
                    {links.map((x) => (
                        <div className={`${navStyles['link-container']}`}>
                            <Link href={x.slug} key={x.id}>
                                <a className={`${navStyles['link-text']}`}>
                                    {x.title}
                                </a>
                            </Link>
                        </div>
                    ))}
                </nav>
            </header>
            <Script>
                {`function mobileNav() {
                    var y = document.getElementById('mobile-nav');
                    if (y.style.display === 'none') {
                        y.style.display = 'block';
                      } else {
                        y.style.display = 'none';
                      }
                }`}
            </Script>
        </>
    );
};

export default MobileHeader;
