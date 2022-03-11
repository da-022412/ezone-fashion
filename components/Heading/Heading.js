import headingStyles from './Heading.module.scss';

const Heading = ({ children, style, level, ...rest }) => {
    const Tag = 'h' + level;
    return (
        <Tag
            className={`${headingStyles[style]}`}
            dangerouslySetInnerHTML={{ __html: children }}
            {...rest}
        ></Tag>
    );
};

export default Heading;
