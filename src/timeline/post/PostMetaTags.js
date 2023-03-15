import { Helmet } from "react-helmet";

const PostMetaTags = ({ post: { title, author: { name } }, isActive }) => {
    if (!isActive) {
        return;
    }

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={`Procitajte clanak od ${name}`} />
            <link rel="canonical" href={`${window.location.href}`} />
            <meta name="robots" content="index, follow" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@novinator" />
            <meta name="twitter:creator" content="@novinator" />
            <meta name="twitter:url" content={`${window.location.hostname}`} />
            <meta name="twitter:title" content={`${title}`} />
            <meta name="twitter:description" content={`${name}`} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={'./logo512.png'} />
            <meta property="og:url" content={`${window.location.hostname}`} />
            <meta property="og:site_name" content="Novinator" />
            <meta property="og:title" content={`${title}`} />
            <meta property="og:description" content={`${name}`} />

        </Helmet>
    );
};

export default PostMetaTags;