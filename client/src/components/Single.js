
const Single = ({blog, comments}) => {
  const timestamp = blog.date;
  const date = new Date(timestamp);
  const selectedDate = date.toDateString().slice(4);
  
  return (
      <div id="Single">
        <img className="blogImg" src={blog.img} alt={blog.title} />
        <div className="content">
          <div className="tell"><p>by <span>{blog.author}</span></p> <span>{selectedDate}</span></div>
          <p className="topic">{blog.title}</p>
          <p className="about">{blog.about}</p>
          <div className="com">
            <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/comment-64.png" alt="comment" className="icon" />
            <p>
              {
                comments?.length ?? 0
              }
            </p>
          </div>
          <p className="bc">{blog.category}</p>
        </div>
      </div>
  )
}

export default Single