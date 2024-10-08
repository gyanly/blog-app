import { useState,useEffect } from "react";
import BlogList from "./BlogList"; 
import useFetch from "./useFetch";

function Home() { 
    const myInfo = useFetch("http://localhost:3000/blogs");
    const blogs = myInfo.blogs;
    const isPending = myInfo.isPending;
    const error = myInfo.error;

    const handleDelete = (id)=>{
        setBlogs(blogs.filter( blog=>blog.id!==id));
    }
 
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title ="All Blogs" handleDelete = {handleDelete} />}
            
            {/* <BlogList blogs = {blogs.filter( blog=>blog.author == 'gyan')} title ="Gyan's Blogs" /> */}
        </div>
    )
  }
  export default Home;