import Carousel from 'react-bootstrap/Carousel';
import Content from './Content';
import DiscussButton from './DiscussButton';
import ReactionButtons from './ReactionButtons';

const Post = ({ post }) => {
    const { author, score, title, content } = post;

    return (
        <div>
            <div>{author}</div>
            <div>{score}</div>
            <div>{title}</div>
            <Content slides={content} />
            <ReactionButtons />
            <DiscussButton />
        </div>
    );
};

export default Post;