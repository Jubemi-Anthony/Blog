const PostUn = ({number, numberL}) => {
    return (
      <div className="PostFoot">
          <div className="but">
              <img className="icon" src="https://cdn0.iconfinder.com/data/icons/crowdfunding-grey-version/64/b-01-64.png" alt="like"/>
              <span>{numberL}</span>
          </div>
          <div className="but">
              <img className="icon" src="https://cdn4.iconfinder.com/data/icons/advertising-soft/512/message_chat_comment_talk_voice_speech_speak-64.png" alt="comment"/>
              <span>{number}</span>
          </div>
          <div className="but">
              <img className="icon" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/share-2-64.png" alt="share"/>
          </div>
      </div>
    )
  }
  
  export default PostUn;