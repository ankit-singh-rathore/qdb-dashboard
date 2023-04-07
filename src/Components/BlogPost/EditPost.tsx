import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPost = (props: any) => {

  const [postContent, setPostContent] = useState({
    title: props.Title,
    description: props.Body,
    id: props.Id
  });

  const handleChange = (e:any) => {
    const {name, value } = e.target;
    setPostContent((prev)=> {
      return {...prev, [name]: value}
    })
  }

  const navigate = useNavigate();
  const redirectToBlogs = () => {
    navigate('/blogs');
  }

  const updatePost = () => {
    fetch(`${process.env.REACT_APP_BASE_API_URI}/posts/${postContent.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: postContent.id,
        title: postContent.title,
        body: postContent.description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log("API",json));
      redirectToBlogs();
  }
  
  return (
    <>
      <div className="blog-main">
        <h2 className="blog-main-title">Blog Post</h2>
        <div className="blog-sub-title">Quatar Development Bank</div>
        <div className="blog-conatiner">
          <div className="row blog-edit">
            <input
              type="text"
              name ="title"
              value={postContent.title}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              name ="description"
              value = {postContent.description}
              onChange={(e) => handleChange(e)}
            />
            <button className="update-btn" onClick={updatePost}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
