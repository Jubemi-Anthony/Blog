import React from 'react'
import FooterNote from './FooterNote'


const Footer = () => {
  return (
    <footer>
        <div className='footer'>
        <div className='left'>
            <div className="naming">
            <p className='logo'>Ant Blogs</p>
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
                    <a href="https://wa.me/+2348120210738">
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
            <FooterNote/>
        </div>
        <div className='right'>
            <div className='links'>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Need a Writer?</p>
            </div>
            <div className='copyright'>
                <p><span>Copyright © Ant Blogs 2023.</span> All rights reserved. <span>Disclaimer:</span> The information provided on this blog is for general informational purposes only. <span>Ant Blogs</span> makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the blog. Any reliance you place on such information is strictly at your own risk. The views and opinions expressed in this blog are those of the authors and do not necessarily reflect the official policy or position of <span>Ant Blogs</span>.</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer