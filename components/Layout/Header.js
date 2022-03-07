import Image from 'next/image';
import Link from 'next/link';
import headerStyles from './Header.module.scss';

import Nav from './Nav';

import Logo from '../../assets/images/ezone-us-logo.png';

const Header = ({ links }) => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <figure className={headerStyles.logo}>
                    <Link href='/textile'>
                        <a>
                            <Image
                                src={Logo}
                                width={120}
                                height={60}
                                alt='Logo'
                            />
                        </a>
                    </Link>
                </figure>
                <Nav links={links} />
            </div>
        </header>
    );
};

export default Header;
