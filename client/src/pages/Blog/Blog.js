import { useState, useEffect } from "react";
import Single from "../../components/Single"
import Navbar from "../../components/Navbar";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { shuffle } from 'lodash';
import Tops from "../../components/Tops";
import "./Blog.css";
import bloggingQuotes from "../../data/bloggingQuotes";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
const display = bloggingQuotes[Math.floor(Math.random()*bloggingQuotes.length)];
  
// const date = new Date('Febuary 19, 2023 22:40');
// const timestamp = date.getTime();

// console.log(timestamp);

const Blog = ({blogs, url}) => {
    const [search, setSearch] = useState('');
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${url}/post/getPosts`);
            const jsonData = await response.json();
            setPost(jsonData);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
  }, []);

  const scatteredBlogs = shuffle(post);
  const top = [];

  // Use reduce to create an object with category counts
const categoryCounts = post.reduce((counts, item) => {
    const { category } = item.post;
    
    // Check if category exists in counts object
    if (counts.hasOwnProperty(category)) {
      // Increment the count if category already exists
      counts[category]++;
    } else {
      // Initialize the count to 1 if category is encountered for the first time
      counts[category] = 1;
    }
    
    return counts;
  }, {});
  
  return (
    <div id="Blog">
        <section className="sec-1">
            <Navbar/>
            <div className="sec-1i">
                <p id="displaY" className="big-bold">{display}</p>
            </div>
        </section>
        <div className="categories">
        <p className={search === '' ? 'selected' : ''} onClick={() => setSearch('')}> All <span>{scatteredBlogs.length}</span></p>
            {
                Object.entries(categoryCounts).map(([key, value]) => (
                    <p className={search === key ? 'selected' : ''} onClick={() => setSearch(key)} key={key}> {key} <span>{value}</span></p>
                ))
            }
        </div>
        <section className="sec-2">
            <div className="left">
                <p className="big-bold">Read our Blogs...</p>
                <div className="grided">
                {
                    scatteredBlogs.filter((blog) =>{
                        if(search === ""){
                            return blog
                        }else if(blog.post.category.includes(search) || blog.post.title.toLowerCase().includes(search.toLowerCase())){
                            return blog
                        }
                    }).map((blog) =>(
                        <Link key={blog.id} to={`/Post/${blog.id}`}>
                        <Single
                            blog={blog.post}
                            comments={blog.comments}
                        />
                        </Link>

                    ))
                }
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <img className="icon" src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/search-outline-64.png" alt="search" />
                    <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Read About..."/>
                </div>
                <p className="big-bold">Top 10 Posts...</p>

                <div id="small-scr" className="aligned">
                <Carousel autoPlay={true} interval={9000} infiniteLoop={true} showThumbs={false} showStatus={false} emulateTouch={true}>
                    {
                        scatteredBlogs.map((blog) => (
                            <Link key={blog.id} to={`/Post/${blog.id}`}>
                                <Tops blog={blog.post}/>
                            </Link>
                        ))
                    }
                </Carousel>
                </div>

                <div id="big-scr" className="aligned">
                    {
                        scatteredBlogs.map((blog) => (
                            <Link key={blog.id} to={`/Post/${blog.id}`}>
                                <Tops blog={blog.post}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog