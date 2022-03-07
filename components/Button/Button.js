import buttonStyles from './Button.module.scss';

const Button = ({ children, style, link }) => {
    return (
        <div className={`${buttonStyles['btn-container']}`}>
            <a href={link}>
                <div className={`${buttonStyles[style]}`}>{children}</div>
            </a>
        </div>
    );
};

export default Button;
