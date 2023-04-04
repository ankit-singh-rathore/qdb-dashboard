import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPost from "./EditPost";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();
  const [currentPost, setCurrentPost] = useState(post?.id)

  let POST_API = `${process.env.REACT_APP_BASE_API_URI}/posts/${id}`;

  const fetchPosts = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data);
    } catch (e) {
      console.log(e);
    }
  };

  const deletePost = (id: any) => {
    fetch(`${process.env.REACT_APP_BASE_API_URI}/posts/${id}`, {
      method: "DELETE",
    });
  };

  function editPost(id:any){
    setCurrentPost(id);
  }
  
  useEffect(() => {
    fetchPosts(POST_API);
  }, []);

  return (
    <>
    {currentPost === post?.id ? <EditPost Id={post?.id} Title= {post?.title} Body={post?.body}/> :
      <div className="blog-main">
        <h2 className="blog-main-title">Blog Post</h2>
        <div className="blog-sub-title">Quatar Development Bank</div>
        <div className="blog-conatiner">
          <div className="row blogs-list">
            <div className="blog-title">{post?.title} </div>
            <div className="blog-desc">{post?.body} </div>
            <div className="action-btn right">
              <button className="edit-btn" onClick={()=>editPost(post?.id)}> Edit </button>
              <button className="delete-btn" onClick={() => deletePost(post?.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default BlogPost;
