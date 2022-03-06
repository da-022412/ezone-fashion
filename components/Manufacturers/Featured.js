import featuredStyles from '../../styles/Featured.module.scss';

const content = [
    {
        id: 0,
        name: 'Manufacturer #1',
        categories: 'Womens / Shoes / Bags',
    },
    {
        id: 1,
        name: 'Manufacturer #2',
        categories: 'Mens / Shoes',
    },
    {
        id: 2,
        name: 'Manufacturer #3',
        categories: 'Fabric / Accessories',
    },
    {
        id: 3,
        name: 'Manufacturer #4',
        categories: 'Hats / Mens',
    },
];

const Featured = () => {
    return (
        <section className={`${featuredStyles['featured-section']}`}>
            <div className={`${featuredStyles['featured-container']}`}>
                {content.map((x) => (
                    <div className={featuredStyles.featured} key={x.id}>
                        <h5 className={`${featuredStyles['heading-5']}`}>
                            {x.name}
                        </h5>
                        <h6 className={`${featuredStyles['heading-6']}`}>
                            {x.categories}
                        </h6>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;
