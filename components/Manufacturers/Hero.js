import heroStyles from '../../styles/Hero.module.scss';

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div
                className={`${heroStyles['hero-container']} ${heroStyles['text-center']}`}
            >
                <div className={`${heroStyles['title-container']}`}>
                    <h1 className={`${heroStyles['heading-1']}`}>
                        Meet our Manufacturers
                    </h1>
                    <p className={`${heroStyles['body-text']}`}>
                        We’ve developed deep partnerships with the best
                        manufactururers from China and throughout the rest of
                        Asia, and their collective capabilities are extensive.
                        See below, to see all of our featured manufacturers in
                        key product categories.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
