const PostUn = ({number, numberL}) => {
    return (
      <div className="PostFoot">
          <div className="but">
              <img className="icon" src="https://cdn4.iconfinder.com/data/icons/feed-back/70/Untitled-7-01-64.png" alt="like"/>
              <span>{numberL}</span>
          </div>
          <div className="but">
              <img className="icon" src="https://cdn4.iconfinder.com/data/icons/font-awesome-regular/512/comment-64.png" alt="comment"/>
              <span>{number}</span>
          </div>
          <div className="but">
              <img className="icon" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/share-2-64.png" alt="share"/>
          </div>
      </div>
    )
  }
  
  export default PostUn;