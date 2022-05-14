import React, { useState } from "react";
import "../styles/Form.css";
import pinIcon from "../assets/pin.png";
import { IPost, IResponsePost } from "../interfaces";
import { http } from "../http";

const Form = ({flow}: any) => {
  const [ post, setPostState ] = useState({
    title: "",
    body: ""
  });

  async function createNewPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const by: string = localStorage.getItem("email");
    const aToken: string = localStorage.getItem("aToken");
    const newPost: IResponsePost = await http.post("/posts/new", {
      title: post.title,
      body: post.body,
      by: by
    }, {
      headers: {
        "Authorization": `Bearer ${aToken}`
      }
    });
    const newUIPost: IPost = {
      title: newPost.data.title,
      body: newPost.data.body,
      date: newPost.data.createdAt.split("T")[0],
      by: newPost.data.by,
      id: newPost.data._id
    };
    setPostState({
      title: "",
      body: ""
    });
    console.log(newPost);
    
    flow(newUIPost);
  }

  return(
    <form className="form" onSubmit={ createNewPost }>
      <input 
        type="text" 
        className="form-title" 
        placeholder="Title" 
        value={ post.title }
        onChange={ event => 
          setPostState({...post, title: event.target.value})}/>
      <textarea 
        className="form-body" 
        placeholder="How's your day?" 
        value={ post.body }
        onChange={ event => 
          setPostState({...post, body: event.target.value})}/>
      <div className="form-buttons">
        <button className="form-send">
          Publish
        </button>
        <input 
          type="file" 
          id="file" 
          className="form-file"
          accept="image/*, video/mp4" 
        />
        <label htmlFor="file">
          <img src={ pinIcon } alt="Pin" className="form-icon" />
        </label>
      </div>
    </form>
  )
}

export default Form;
