import { topics } from "../data/footer"
import { useState } from "react"

const FooterNote = () => {
    const [select, setSelect] = useState("");

    function pickMe(me){
        select === me ? setSelect("") : setSelect(me)
    }
  return (
    <div>
        <p className="big-bold">Subscribe to our Diverse Blogging Perspectives Newsletter!</p>
        <p className="tired">Tired of sifting through countless articles and blog posts to find valuable insights and advice on blogging? We've got you covered! Sign up for our exclusive Blogging Insights Newsletter and receive a curated selection of tips, strategies, and industry insights directly to your inbox.</p>
        <h3>Why subscribe to our Blogging Insights Newsletter?</h3>
        <ul>
        {
            topics.map((topic) =>(
                <li onClick={() => pickMe(topic.title)} key={topic.title}>
                    <b>{topic.title}</b>
                    <p className="reason">{topic.reason}</p>
                    <p className="content">{topic.title === select && topic.content}</p>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default FooterNote