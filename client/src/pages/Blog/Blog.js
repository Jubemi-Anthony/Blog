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
  
const display = bloggingQuotes[Math.floor(Math.random()*bloggingQuotes.length)];
  
const Blog = ({blogs}) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/getPosts");
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
  for(let i=0; i<10; i++){
      let rand = Math.floor(Math.random() * (blogs.length -1)) + 1;
      top.push(post[rand])
  }

  return (
    <div id="Blog">
        <Navbar/>
        <section className="sec-1">
            <div>
                <p className="big-bold">{display}</p>
                <p className="button">Explore</p>
            </div>
        </section>
        <section className="sec-2">
            <div className="left">
                <p className="big-bold">Read our Blogs...</p>
                <div className="grided">
                {
                    scatteredBlogs.map((blog) =>(
                        <Link key={blog.id} to={`/Post/${blog.id}`}>
                        <Single
                            blog={blog}
                        />
                        </Link>

                    ))
                }
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <img className="icon" src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/search-outline-64.png" alt="search" />
                    <input type="search" placeholder="Read About..."/>
                </div>
                <p className="big-bold">Top 10 Posts...</p>

                <div id="small-scr" className="aligned">
                <Carousel autoPlay={true} interval={9000} infiniteLoop={true} showThumbs={false} showStatus={false} emulateTouch={true}>
                    {
                        scatteredBlogs.map((blog) => (
                            <Link key={blog.id} to={`/Post/${blog.id}`}>
                                <Tops blog={blog}/>
                            </Link>
                        ))
                    }
                </Carousel>
                </div>

                <div id="big-scr" className="aligned">
                    {
                        scatteredBlogs.map((blog) => (
                            <Link key={blog.id} to={`/Post/${blog.id}`}>
                                <Tops blog={blog}/>
                            </Link>
                        ))
                    }
                </div>
                <p className="big-bold">Contact Us...</p>
                <div className="socials">
                    <a href="https://twitter.com/AnthonyJubemi">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-64.png" alt="Twitter" className="icon" />
                    </a>
                    <a href="https://www.instagram.com/jubemi_anthony">
                        <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-64.png" alt="Instagram" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/jubemi-anthony-pajiah-626b7323b">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2102/100/social_media_circled_network-03-64.png" alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://github.com/Jubemi-Anthony">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-64.png" alt="Github" className="icon" />
                    </a>
                    <a href="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-64.png">
                        <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-64.png" alt="Whatsapp" className="icon" />
                    </a>
                    <a href="https://t.me/Anthony_Jubemi">
                        <img className="icon" src="https://cdn3.iconfinder.com/data/icons/social-icons-33/512/Telegram-64.png" alt="Telegram" />
                    </a>
                    <a href="https://facebook.com/Jubemi.Genius">
                        <img className="icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-64.png" alt="Facebook" />
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog