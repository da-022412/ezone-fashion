import headerStyles from './SuperHeader.module.scss';

const SuperHeader = () => {
    return (
        <section className={`${headerStyles['super-header']}`}>
            <div
                className={`${headerStyles['header-container']} ${headerStyles['text-center']}`}
            >
                <div className={`${headerStyles['copy-container']}`}>
                    <p className={`${headerStyles['super-header-text']}`}>
                        Pre-register to get early access to the event.{' '}
                        <u>
                            <a href='#register'>REGISTER NOW</a>
                        </u>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SuperHeader;
