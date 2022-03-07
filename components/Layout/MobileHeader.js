import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import headerStyles from './Header.module.scss';
import navStyles from './Nav/Nav.module.scss';

import Logo from '../../assets/images/ezone-us-logo.png';
import Menu from '../../assets/images/outline-menu-black.png';
import Close from '../../assets/images/outline-close-black.png';

const MobileHeader = ({ links }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header className={headerStyles.header}>
                <div className={`${headerStyles['header-container']}`}>
                    <figure className={headerStyles.logo}>
                        <Link href='/textile'>
                            <a>
                                <Image
                                    src={Logo}
                                    width={90}
                                    height={45}
                                    alt='Logo'
                                />
                            </a>
                        </Link>
                    </figure>
                    <figure
                        className={headerStyles.menu}
                        onClick={() => setIsActive(!isActive)}
                    >
                        {isActive ? (
                            <Image
                                src={Close}
                                width={24}
                                height={24}
                                alt='Close'
                            />
                        ) : (
                            <Image
                                src={Menu}
                                width={24}
                                height={24}
                                alt='Hamburger'
                            />
                        )}
                    </figure>
                </div>
                {isActive && (
                    <nav className={`${navStyles['mobile-nav']}`}>
                        {links.map((x) => (
                            <div
                                className={`${navStyles['link-container']}`}
                                key={x.id}
                            >
                                <Link href={x.slug} key={x.id}>
                                    <a
                                        className={`${navStyles['link-text']}`}
                                        onClick={() => setIsActive(!isActive)}
                                    >
                                        {x.title}
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </nav>
                )}
            </header>
        </>
    );
};

export default MobileHeader;
