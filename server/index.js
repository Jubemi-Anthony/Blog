import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

dotenv.config();
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.get('/', (req, res) =>{
    res.send('APP IS RUNNING');
});

function saveData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('database.json', jsonData);
}

app.post('/addPost', async (req, res) => {
  const post = req.body;

  // Function to add a new post
  async function addPost(newItem) {
    try {
      const jsonData = fs.readFileSync('database.json', 'utf8');
      const data = JSON.parse(jsonData);
      data.push(newItem);
      saveData(data);
      return true;
    } catch (error) {
      console.error('Error adding post:', error);
      return false;
    }
  }

  const success = await addPost(post);

  if (success) {
    res.status(200).json({ message: 'Post added successfully' });
  } else {
    res.status(500).json({ message: 'Error adding post' });
  }
});

app.get('/getPosts', async (req,res) =>{
  fs.readFile('database.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
      console.log('DONE');
    }
  });
})

app.post('/addComment', async (req, res) => {
  const comment = req.body;

  // Function to add a new post
  async function addComment(newItem) {
    try {
      const jsonData = fs.readFileSync('database.json', 'utf8');
      const data = JSON.parse(jsonData);
      console.log(newItem);
      data.filter((correct) =>{
        if(newItem.id === correct.id){
          correct.comments.push(newItem)
        }
      })
      saveData(data);
      return true;
    } catch (error) {
      console.error('Error adding post:', error);
      return false;
    }
  }

  const success = await addComment(comment);

  if (success) {
    res.status(200).json({ message: 'Post added successfully' });
  } else {
    res.status(500).json({ message: 'Error adding post' });
  }
});

app.post('/likePost', async (req, res) => {
  const post = req.body;

  // Function to like a post
  async function likePost(newItem) {
    try {
      const jsonData = fs.readFileSync('database.json', 'utf8');
      const data = JSON.parse(jsonData);
      console.log(newItem);
      data.filter((correct) =>{
        if(newItem.id === correct.id){
          const yes = correct.likes.find((cor) => cor.liker === newItem.liker)
          if(yes){
            return
          }else{
            correct.likes.push(newItem)
          }
        }
      })
      saveData(data);
      return true;
    } catch (error) {
      console.error('Error adding post:', error);
      return false;
    }
  }

  const success = await likePost(post);

  if (success) {
    res.status(200).json({ message: 'Post added successfully' });
  } else {
    res.status(500).json({ message: 'Error adding post' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT: ${PORT}`));