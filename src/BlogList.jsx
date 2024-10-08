function BlogList(props){
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
   
    return(
        <div>
            <h2>{title}</h2>
            {blogs.map(item => (
                <div className="blog-preview" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Written By: {item.author}</p>  
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>                  
            </div>
            ))}
        </div>
    );
}
export default BlogList;