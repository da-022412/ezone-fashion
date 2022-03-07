import textStyles from './BodyText.module.scss';

const BodyText = ({ children }) => {
    return (
        <text
            className={`${textStyles['body-text']}`}
            dangerouslySetInnerHTML={{ __html: children }}
        ></text>
    );
};

export default BodyText;
