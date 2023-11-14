import { db,User, Post } from "../config/firebaseConfig.js";

//GETTING ALL POSTS
export const getPosts = async(req, res)=>{
    try {
            const Posts = await Post.get();
            const posts = Posts.docs.map((post) => ({id: post.id, ...post.data()}));
            res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({post: error.post})
    }  
}

//CREATING A POST
export const createPost = async(req, res)=>{
    const post = req.body;
    try {
        await Post.add({post});
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({post: error.post});
    }
}

//CREATING A COMMENT
export const createComment = (req, res)=>{
    const comment = req.body;
    const documentRef = db.collection('Post').doc(comment.id);
    documentRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const existingData = doc.data();
  
        if (existingData && existingData.comments && Array.isArray(existingData.comments)) {
          existingData.comments.push(comment);
        } else {
          existingData.comments = [comment];
        }
  
        documentRef
          .update(existingData)
          .then(() => {
            res.status(201).json('successful');
          })
          .catch((error) => {
            res.status(409).json({message: error});
          });
      } else {
        // Document does not exist, create it with the array field initialized
        documentRef
          .set({ comments: [comment] })
          .then(() => {
            res.status(201).json('successful');
          })
          .catch((error) => {
            res.status(409).json({message: error});
          });
      }
    })
    .catch((error) => {
        res.status(409).json({message: error});
    });
}

//EDITING A POST
export const editPost = async (req, res) => {
  const { id, author, title, date, img, content, category, about } = req.body;
  const post = {
    author,
    title,
    date,
    img,
    content,
    category,
    about,
  };

  try {
    const documentRef = db.collection('Post').doc(id);
    await documentRef.set({post: post});
    res.status(201).json('successful');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//LIKING A POST
export const likePost = (req, res)=>{
    const like = req.body;
    const documentRef = db.collection('Post').doc(like.id);
    documentRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const existingData = doc.data();
  
        if (existingData && existingData.likes && Array.isArray(existingData.likes)) {
          existingData.likes.find((cor) =>{
            if(cor.liker === like.liker){
                return
            }else{
                existingData.likes.push(like);
            }
          })
        } else {
          existingData.likes = [like];
        }
  
        documentRef
          .update(existingData)
          .then(() => {
            res.status(201).json('successful');
          })
          .catch((error) => {
            res.status(409).json({message: error});
          });
      } else {
        // Document does not exist, create it with the array field initialized
        documentRef
          .set({ likes: [like] })
          .then(() => {
            res.status(201).json('successful');
          })
          .catch((error) => {
            res.status(409).json({message: error});
          });
      }
    })
    .catch((error) => {
        res.status(409).json({message: error});
    });
}