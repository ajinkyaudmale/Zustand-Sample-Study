import { useEffect } from "react";
import { usePostStore } from "../store/Post.store";

function Poststore() {
    const { post, loading, error, fetchPost } = usePostStore();

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    if (loading) return <h1>Loading....</h1>;
    if (error) return <h1>{error}</h1>;

    return <ul>
        {
            post.map((element, key) => (
            <div key={key}>
                <h1>ID: {element.id}</h1>
                <h1>author: {element.author}</h1>
                <h1>width: {element.width}</h1>
                <h1>height: {element.height}</h1>
            </div>
    ))};
        
    </ul>
    
}

export default Poststore;
