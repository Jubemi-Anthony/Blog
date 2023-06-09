import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure
} from '@chakra-ui/react'

import "./Post.css";
import Navbar from "../../components/Navbar";
import PostFoot from "../../components/PostFoot";
import PostUn from '../../components/PostUn';
import Comment from '../../components/Comment';


const Post = ({generateNewId}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const {id} = useParams();
  
  const [allposts, setAllPosts] = useState([]);
  
  let jsonData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getPosts");
        jsonData = await response.json();
        if(typeof(jsonData) !== "undefined"){
          setAllPosts(jsonData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [jsonData]);

  let post;

  if(allposts.length > 0){
    allposts.filter((blog) =>{
      if(blog.id === id){
        post = blog;
      }      
    })
  }  


  const validationSchema = Yup.object().shape({
    comment: Yup.string().required("Title is required"),
  });
 
  
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);
  
  // Check if user is undefined or null
  if (user === undefined || user === null) {
    localStorage.setItem('user', JSON.stringify({}));
  }

  const formik = useFormik({
    initialValues: {
      commentId: generateNewId(),
      comment: "",
      commenter: user.name,
      picture: user.picture,
      date: Date.now(),
      id: id
    },
    validationSchema,
    onSubmit: (values) => {
      fetch('http://localhost:5000/addComment', {
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
  
      onClose()
      formik.resetForm();
    },
  });

  function likePost(){
    const details = {
      id: id,
      liker: user.name
    }
    fetch('http://localhost:5000/likePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details, null, 2)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const close = () =>{
    onClose();
  }
  const update = ()=>{
    onOpen();
  }

  return (
    <div id="Post">
      <Navbar />
      {allposts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
        <div className="Post">
          <p className="big-bold">{post.title}</p>
          <h3>{post.about}</h3>
          <div className="det">
            <p className='time'>{moment(post.date).fromNow()}</p>
            <p className="category">{post.category}</p>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
          {Object.keys(user).length !== 0 ? 
            <PostFoot 
              numberL={post.likes.length}
              likePost={likePost} 
              number={post.comments.length} 
              onOpen={update} /> : 
              (<PostUn 
                numberL={post.likes.length} 
                number={post.comments.length}
            />)}
          
        </div>
        <div className="comments">
          {
            post.comments.length === 0 ? (
              <h2>No Comments</h2>
            ):(
              post.comments.map((cmt) =>(
                <Comment key={cmt.commentId} comment={cmt}/>
              ))
            )
          }
        </div>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <div id="overlay">
              <form onSubmit={formik.handleSubmit}>
                <img onClick={close} className='icon' src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/x-64.png" alt="cancel" />
                <label className='big-bold' htmlFor="category">Add a Comment</label>
                <textarea
                  type="text"
                  id="comment"
                  name="comment"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                />
                {formik.errors.comment && formik.touched.comment && (
                  <div>{formik.errors.comment}</div>
                )}
                <button className="selected" type="submit">Submit</button>
              </form>
              </div>
            </ModalContent>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default Post;
