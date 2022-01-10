import Image from 'next/image';

import iconStyles from '../styles/Icons.module.scss';

import Textile from '../assets/images/bags-icon.png';
import Mens from '../assets/images/pants-icon.png';
import Dress from '../assets/images/dress-icon.png';
import Shoe from '../assets/images/shoe-icon.png';
import Backpack from '../assets/images/backpack-icon.png';

const icons = [
    {
        id: 0,
        img: Textile,
        width: 108,
        height: 109,
        title: 'Textile',
    },
    {
        id: 1,
        img: Mens,
        width: 108,
        height: 108,
        title: 'Mens',
    },
    {
        id: 2,
        img: Dress,
        width: 112,
        height: 112,
        title: 'Womens',
    },
    {
        id: 3,
        img: Shoe,
        width: 101,
        height: 101,
        title: 'Shoes',
    },
    {
        id: 4,
        img: Backpack,
        width: 88,
        height: 88,
        title: 'Accessories',
    },
];

const Icons = () => {
    return (
        <div className={iconStyles.icons}>
            {icons.map((x) => (
                <div className={`${iconStyles['icons-container']}`}>
                    <figure
                        className={`${iconStyles['icon-container']}`}
                        key={x.id}
                    >
                        <Image src={x.img} width={x.width} height={x.height} />
                    </figure>
                    <h5 className={`${iconStyles['heading-5']}`}>{x.title}</h5>
                </div>
            ))}
        </div>
    );
};

export default Icons;
