import Image from 'next/image';

import iconStyles from '../../styles/Icons.module.scss';

import imageOne from '../../assets/images/colored-thread-bulk.jpg';
import imageTwo from '../../assets/images/young-man-rain-coat.jpg';
import imageThree from '../../assets/images/shades-sundress.jpg';
import imageFour from '../../assets/images/upside-down-in-bathtub.jpg';
import imageFive from '../../assets/images/croc-skin-purse.jpg';

const icons = [
    {
        id: 0,
        img: imageOne,
        width: 160,
        height: 160,
        title: 'Textile',
    },
    {
        id: 1,
        img: imageTwo,
        width: 160,
        height: 160,
        title: 'Mens',
    },
    {
        id: 2,
        img: imageThree,
        width: 160,
        height: 160,
        title: 'Womens',
    },
    {
        id: 3,
        img: imageFour,
        width: 160,
        height: 160,
        title: 'Shoes',
    },
    {
        id: 4,
        img: imageFive,
        width: 160,
        height: 160,
        title: 'Accessories',
    },
];

const Icons = () => {
    return (
        <div className={iconStyles.icons}>
            {icons.map((x) => (
                <div className={`${iconStyles['icons-container']}`} key={x.id}>
                    <figure
                        className={`${iconStyles['icon-container']}`}
                        key={x.id}
                    >
                        <Image
                            src={x.img}
                            width={x.width}
                            height={x.height}
                            alt={x.title}
                        />
                    </figure>
                    <h5 className={`${iconStyles['heading-5']}`}>{x.title}</h5>
                </div>
            ))}
        </div>
    );
};

export default Icons;
