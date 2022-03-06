import Link from 'next/link';

import navStyles from '../../styles/Nav.module.scss';

const Nav = ({ links }) => {
    return (
        <nav className={navStyles.nav}>
            {links.map((x) => (
                <div className={`${navStyles['link-container']}`} key={x.id}>
                    <Link href={x.slug} key={x.id}>
                        <a className={`${navStyles['link-text']}`}>{x.title}</a>
                    </Link>
                </div>
            ))}
        </nav>
    );
};

export default Nav;
