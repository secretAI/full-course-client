import React from "react";
import "../styles/PostItem.css"

const PostItem = (props: any) => {
  
  return(
    <div className="post">
      <div className="post-info">
        <div className="info-block">
          <p className="pre-title">
            added
          </p>
          <p className="date">
            {props.post.date}
          </p>
        </div>

        <span className="separator"> • </span>

        <div className="info-block">
          <p className="pre-title">
            author
          </p>
          <p className="by">
            {props.post.by}
          </p>
        </div>

        <span className="separator"> • </span>

        <div className="info-block">
          <p className="pre-title">
            id
          </p>
          <p className="id">
            {props.post.id}
          </p>
        </div>
      </div>

      <div className="post-content">
        <h3 className="title">
          {props.post.title}
        </h3>
        <div className="body">
          {props.post.body}
        </div>
      </div>
      <div className="buttons">
        <button className="buttons-edit">
            Edit
          </button>
          <button 
            type="button"
            className="buttons-remove"
            onClick={ () => props.unflow(props.post) }>
            Delete
          </button>
      </div>
    </div>
  )
}

export default PostItem;
