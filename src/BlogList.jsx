function BlogList(props){
    const blogs = props.blogs;
   
    return(
        <div>
            {blogs.map(item => (
                <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written By: {item.author}</p>                    
            </div>
            ))}
        </div>
    );
}
export default BlogList;