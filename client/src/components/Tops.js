const Tops = ({blog}) => {
  return (
    <div id="Tops">
        <img src={blog.img} alt={blog.title} />
        <p>{blog.title}</p>
    </div>
  )
}

export default Tops