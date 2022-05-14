import React from "react";
import PostItem from "./PostItem";
import "../styles/PostList.css"

const PostList = ({posts, unflow}: any) => {
  return(
    <div className="list">
      <h1 className="global-title">
        All Posts
      </h1>
      {posts.length !== 0
        ? posts.map((post: any) => 
          <PostItem  
            unflow={ unflow }
            post={ post } 
            key={ post.id }/>
        )
        : <h2 className="no-data">
          Nothing in here yet..
        </h2>
      }
    </div>
  )
}

export default PostList;

