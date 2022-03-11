import testimonialsStyles from './Testimonials.module.scss';

const testimonials = [
    {
        id: 0,
        name: 'Thomas R. Suozzi',
        title: 'Member of the Congress',
        slug: '/pdf/thomas-testimonial.pdf',
    },
    {
        id: 1,
        name: 'Sandra Ung',
        title: 'Member of the NY City Counsil, District 20',
        slug: '/pdf/sandra-testimonial.pdf',
    },
    {
        id: 2,
        name: 'James F. Gennaro',
        title: 'Member of the NY City Counsil',
        slug: '/pdf/james-testimonial.pdf',
    },
    {
        id: 3,
        name: 'Michael A. Patterson',
        title: 'Council Member, Northeastern Distric',
        slug: '/pdf/michael-testimonial.pdf',
    },
    {
        id: 4,
        name: 'Peter Koo',
        title: 'Member of the NY City Counsil, District 20',
        slug: '/pdf/peter-testimonial.pdf',
    },
];

const Testimonials = () => {
    return (
        <>
            <section
                className={`${testimonialsStyles['testimonials-section']}`}
            >
                <div
                    className={`${testimonialsStyles['testimonials-container']}`}
                >
                    <div
                        className={`${testimonialsStyles['title-container']} ${testimonialsStyles['text-center']}`}
                    >
                        <h2 className={`${testimonialsStyles['heading-2']}`}>
                            The Importance of Ezone to Trade with Asia
                        </h2>
                    </div>
                    <div className={testimonialsStyles.testimonials}>
                        {testimonials.map((x) => (
                            <div
                                className={`${testimonialsStyles.testimonial} ${testimonialsStyles['text-center']}`}
                                key={x.id}
                            >
                                <h4
                                    className={`${testimonialsStyles['heading-4']}`}
                                >
                                    {x.name}
                                </h4>
                                <p
                                    className={`${testimonialsStyles['body-text']}`}
                                >
                                    {x.title}
                                </p>
                                <div
                                    className={`${testimonialsStyles['btn-container']}`}
                                >
                                    <a
                                        className={`${testimonialsStyles['link-text']}`}
                                        href={x.slug}
                                        rel='noreferrer'
                                        target='_blank'
                                    >
                                        <div
                                            className={`${testimonialsStyles['primary-btn']}`}
                                        >
                                            Read the message
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
