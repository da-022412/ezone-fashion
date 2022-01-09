import Link from 'next/link';
import Image from 'next/image';
import headerStyles from '../../styles/Header.module.scss';

import Nav from './Nav';

import Logo from '../../assets/images/ezone-us-logo.png';

const Header = ({ links }) => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <div className={headerStyles.logo}>
                    <Link href='/'>
                        <a>
                            <Image src={Logo} width={120} height={60} />
                        </a>
                    </Link>
                </div>
                <Nav links={links} />
            </div>
        </header>
    );
};

export default Header;
