import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import NewPostForm from "./NewPostForm";
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/actions";

const PostsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const { storedPosts, isAuthenticated } = useSelector((state) => ({
		storedPosts: state.post.posts,
    isAuthenticated: state.user.isAuthenticated,
	}), shallowEqual);

  useEffect(()=>{
		if (!isAuthenticated) {
			navigate("/login");
		}
	},[isAuthenticated])

  useEffect(()=>{
    if (storedPosts.length) {
			setPosts(storedPosts)
		}
	},[storedPosts])

  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/login";
  }

  return (
    <div className={"blog-container"}>
      <button onClick={handleLogout}>Logout</button>
      <NewPostForm />
      <h2>Blog Posts:</h2>
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostsContainer;
