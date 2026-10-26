import React from "react";
import { Post } from "./Post";

export function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}