import registerStyles from './Register.module.scss';

const Registration = () => {
    return (
        <div className={`${registerStyles['registration-container']}`}>
            <iframe
                className={`${registerStyles['registration-form']}`}
                frameBorder='0'
                height='2400px'
                scrolling='no'
                src='https://www.ezone-us.com/en/registration-form'
                width='100%'
            ></iframe>
        </div>
    );
};

export default Registration;
