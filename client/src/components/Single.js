
const Single = ({blog}) => {
  return (
      <div id="Single">
        <img src={blog.img} alt={blog.title} />
        <p className="topic">{blog.title}</p>
        <p className="about">{blog.about}</p>
        <p className="button">Read Article</p>
      </div>
  )
}

export default Single