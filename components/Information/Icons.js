import Image from 'next/image';

import iconStyles from './Info.module.scss';

const Icons = ({ items }) => {
    return (
        <div className={iconStyles.icons}>
            {items.map(({ img, width, height, title }, index) => (
                <div className={`${iconStyles['icons-container']}`} key={index}>
                    <figure className={`${iconStyles['icon-container']}`}>
                        <Image
                            src={img}
                            width={width}
                            height={height}
                            alt={title}
                        />
                    </figure>
                    <h5 className={`${iconStyles['heading-5']}`}>{title}</h5>
                </div>
            ))}
        </div>
    );
};

export default Icons;
