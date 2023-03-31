import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
var postImg = require("../../img/post.jfif");

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  let BLOG_API = "https://jsonplaceholder.typicode.com/users/1/posts";
  const fetchBlogPosts = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    } catch (e) {
      console.log(e);
      
    }
  }

  useEffect(()=>{
    fetchBlogPosts(BLOG_API);
  }, []);

  return (
    <>
      <div className="blog-main">
      <h2 className="blog-main-title">Blog Post</h2>
      <div className="blog-sub-title">Quatar Development Bank</div>
        <div className="blog-conatiner">
           {posts.map(item => {
            return (
              <div className="row blogs-list" key={item.id}> 
                <div className="col-3">
                  <img src={postImg} />
                </div>
                <div className="col-9">
                  <div className="blog-title">{item.title} </div>
                  <div className="blog-desc">{item.body} </div>
                  <div className="read-more"> <Link to={'/post/'+item.id}>Read More </Link></div>
                </div>
              </div>
            )
           })}
        </div>
      </div>
    </>
  )
}

export default Blogs
