import React from "react";

export default function PostCard({ post }) {
  return (
    <div>
      <h3>Post:</h3>
      {post.text}
    </div>
  );
}
