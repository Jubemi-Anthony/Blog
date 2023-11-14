const PostFoot = ({onOpen, number, likePost, numberL}) => {
  return (
    <div className="PostFoot">
        <div className="but" onClick={likePost}>
            <img className="icon" src="https://cdn2.iconfinder.com/data/icons/sketchy-basic-icons/94/heart-64.png" alt="like"/>
            <span>{numberL}</span>
        </div>
        <div className="but" onClick={onOpen}>
            <img className="icon" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/bubble-64.png" alt="comment"/>
            <span>{number}</span>
        </div>
        <div className="but">
            <img className="icon" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/share-2-64.png" alt="share"/>
        </div>
    </div>
  )
}

export default PostFoot