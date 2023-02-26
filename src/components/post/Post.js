const Post = ({ post }) => {
    const { author, score, title, content } = post;

    const renderContent = () => {
        return content.map(({text}) => (
            <div>{text}</div>
        ));
    }

    return (
        <div>
            <div>{author}</div>
            <div>{score}</div>
            <div>{title}</div>
            <div>{renderContent()}</div>
        </div>
    );
};

export default Post;