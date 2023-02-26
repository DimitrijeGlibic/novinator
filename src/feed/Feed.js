import Post from "../components/post/Post";
import { data } from "./dumyData";

const Feed = () => {

    

    return data.map((post) => (
        <Post post={post} />
    ));
};

export default Feed;