import moment from 'moment';

const Comment = ({comment}) => {
  return (
    <div className="comment">
        <img className='icon' src={comment.picture} alt={comment.commenter} />
        <div className="com-d">
            <p>{comment.commenter}</p>
            <p>{comment.comment}</p>
            <p className='comment-time'>{moment(comment.date).fromNow()}</p>
        </div>
    </div>
  )
}

export default Comment