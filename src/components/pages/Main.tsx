import React, { useState } from "react";
import { http } from "../../http";
import { IPost } from "../../interfaces";
import Form from "../Form";
import Login from "../Login";
import PostList from "../PostList";
import Modal from "../ui/Modal";

const MainPage = () => {
  const [posts, setPostState ] = useState([]);
  
  function createNewPost(newPost: IPost) {
    setPostState([
      ...posts,
      newPost
    ]);
  }

  async function getAllPosts(): Promise<IPost[]> {
    const allPosts: IPost[] = await http.get("/posts/all");
    setPostState([
      ...allPosts
    ]);

    return allPosts;
  }

  function removePost(somePost: IPost) {
    setPostState(posts.filter(post => post.id !== somePost.id));
  }

  function checkAvailableTokens() {
    if(!localStorage.getItem("aToken") && !localStorage.getItem("reToken"))
      return false;
    return true;
  }

  return(
    <div className="main">
      <Form flow={ createNewPost }></Form>
      <PostList unflow={ removePost }  posts={ posts }/>
      { checkAvailableTokens() 
        ? null
        : <Modal> <Login /> </Modal> 
      }
    </div>
  )
}

export default MainPage;
