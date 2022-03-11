import headingStyles from './Heading.module.scss';

const Heading = ({ children, style, level }) => {
    const Tag = 'h' + level;
    return (
        <Tag
            className={`${headingStyles[style]}`}
            dangerouslySetInnerHTML={{ __html: children }}
        ></Tag>
    );
};

export default Heading;
