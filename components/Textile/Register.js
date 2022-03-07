import Registration from './Registration';

import registerStyles from '../../styles/Register.module.scss';

const Register = () => {
    return (
        <section
            className={`${registerStyles['register-section']} ${registerStyles['text-center']}`}
            id='register'
        >
            <div className={`${registerStyles['register-container']}`}>
                <div className={`${registerStyles['title-container']}`}>
                    <h2 className={`${registerStyles['heading-2']}`}>
                        Register now
                    </h2>
                    <p className={`${registerStyles['body-text']}`}>
                        Fill out the form, below, and you’ll have access to meet
                        all of the 500+ manufacturers. Have questions? Once
                        you’ve registered, we’ll send out detailed information
                        about the event, and answer any questions you may have.
                    </p>
                </div>
                <Registration />
            </div>
        </section>
    );
};

export default Register;
