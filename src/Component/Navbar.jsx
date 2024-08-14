function NavBar(){
    return (
        <nav className="navbar flex items-center space-x-4 border-b-2">
            <Link to = "/analysis">
                <img src="https://cdn-icons-png.flaticon.com/512/1570/1570889.png" alt="analysis" />
            </Link>
        </nav>
    )
}
export default NavBar;