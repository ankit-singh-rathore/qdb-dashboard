import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();

  let POST_API = `https://jsonplaceholder.typicode.com/posts/` + id;

  const fetchPosts = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPosts(POST_API);
  }, []);
  return (
    <>
      <div className="blog-main">
        <h2 className="blog-main-title">Blog Post</h2>
        <div className="blog-sub-title">Quatar Development Bank</div>
        <div className="blog-conatiner">{id}</div>
      </div>
    </>
  );
};

export default BlogPost;
