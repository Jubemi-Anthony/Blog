import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Navbar from "../../components/Navbar";
import "./Create.css";

const Edit = ({url}) => {
    const [edit, setEdit] = useState({});
    let jsonData;
    const [allposts, setAllPosts] = useState([]);
    useEffect(() => {
        const updateForm = ()=>{
            formik.setValues({
                author: edit.post?.author || "",
                title: edit.post?.title || "",
                category: edit.post?.category || "",
                about: edit.post?.about || "",
                img: edit.post?.img || "",
                content: edit.post?.content || "",
                date: edit.post?.date || Date.now(),
                id: edit.id
              });
        }
        updateForm();
        const fetchData = async () => {
          try {
            const response = await fetch(`${url}/post/getPosts`);
            jsonData = await response.json();
            if(typeof(jsonData) !== "undefined"){
              setAllPosts(jsonData);
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [jsonData, edit]);
      // console.log(allposts);
    
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
          author:  "",
          title: "" ,
          category:  "",
          about: "" ,
          img:  "",
          content: "",
          date: "" ,
          id: ""
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
          fetch(`${url}/post/editPost`, {
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
    
      const [search, setSearch] = useState('');
  return (
    <div id='Create'>
        <Navbar/>
        <h1>Edit or Delete a Blog Post...</h1>
        <div className="search">
            <img className="icon" src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/search-outline-64.png" alt="search" />
            <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search to Edit/Delete"/>
        </div>
        {
            Object.keys(edit).length === 0 &&
            <ul className='lists'>
            {
                allposts.filter((blog) =>{
                    if(search === ""){
                        return blog;
                    }else if(blog.post.category.includes(search) || blog.post.title.toLowerCase().includes(search.toLowerCase())){
                        return blog
                    }
                }).map((post)=>(
                    <li key="post.id">
                        <div className="abouts">
                        <p>{post.post.title}</p>
                        <label>{post.post.category}</label>
                        </div>
                        <div className="buttons">
                            <button onClick={()=> setEdit(post)}>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </li>
                ))
            }
        </ul>
             
        }
        <form onSubmit={formik.handleSubmit}>
            <button id='CLEAR' onClick={()=> setEdit({})}>CLEAR</button>
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
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          {formik.errors.author && formik.touched.author && (
            <div>{formik.errors.author}</div>
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
  )
}

export default Edit