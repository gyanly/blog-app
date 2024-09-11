const Navbar = ()=>{
    return(
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:'white',
                    backgroundColor:'#4CAF50',
                    borderRadius:'5px',
                    padding:'10px 20px',
                    textDecoration:'none',
                    marginLeft:'10px'
                }}>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;