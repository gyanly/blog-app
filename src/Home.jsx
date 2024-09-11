import { useState } from "react";
import BlogList from "./BlogList"; 

function Home() { 

const [blogs,setBlogs] = useState([
        {title: "Blog 1", content: "This is blog 1 content",id:1,author:"gyan"},
        {title: "Blog 2", content: "This is blog 2 content",id:2,author:"abc"},
        {title: "Blog 3", content: "This is blog 3 content",id:3,
        author:"xyz"
        }, 
    ])
 
    return (
        <div className="home">
            <BlogList blogs = {blogs} title ="All Blogs" />
        </div>
    )
  }
  export default Home