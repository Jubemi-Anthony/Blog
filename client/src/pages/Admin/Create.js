import { useFormik } from "formik";
import * as Yup from "yup";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Navbar from "../../components/Navbar";
import "./Create.css";

const Create = ({generateNewId}) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    about: Yup.string().required("About is required"),
    img: Yup.string().required("Image link is required"),
    content: Yup.string().required("Content is required"),
  });
    
  const handleContentChange = (content) => {
    const images = document.querySelectorAll('.ql-editor img');
    images.forEach((image) => {
      image.classList.add('quill-image');
    });

    formik.setFieldValue("content", content);
  };
  
  const formik = useFormik({
    initialValues: {
      id: generateNewId(),
      title: "",
      category: "",
      about: "",
      img: "",
      content: "",
      date: Date.now(),
      comments: [],
      likes: 0
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      fetch('http://localhost:5000/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values, null, 2)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  
      resetForm({
        values: {
          ...formik.initialValues,
        }
      });
    },
  });
  
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  return (
    <div id="Create">
      <Navbar />
      <p className="big-bold">Create A Post</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="arranged">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title && formik.touched.title && (
            <div>{formik.errors.title}</div>
          )}
        </div>
        <div className="arranged">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          {formik.errors.category && formik.touched.category && (
            <div>{formik.errors.category}</div>
          )}
        </div>
        <div className="arranged">
          <label htmlFor="about">About</label>
          <input
            type="text"
            id="about"
            name="about"
            value={formik.values.about}
            onChange={formik.handleChange}
          />
          {formik.errors.about && formik.touched.about && (
            <div>{formik.errors.about}</div>
          )}
        </div>
        <div className="arranged">
          <label htmlFor="img">Image Link</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formik.values.img}
            onChange={formik.handleChange}
          />
          {formik.errors.img && formik.touched.img && (
            <div>{formik.errors.img}</div>
          )}
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <ReactQuill
            theme="snow"
            value={formik.values.content}
            onChange={handleContentChange}
            modules={modules}
          />
          {formik.errors.content && formik.touched.content && (
            <div>{formik.errors.content}</div>
          )}
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: formik.values.content }}
          />
        </div>
        <button className="selected" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
