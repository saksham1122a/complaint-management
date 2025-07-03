import logo from '../assets/img/logo.png'
function Navbar() {
    return (

        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="University Logo" />
                <span>CollegePulse</span>
            </div>
            <div class="nav-links">
                <a href="#home" class="active">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#" class="login-trigger">Submit Feedback</a>
            </div>
        </nav>

    )
}

export default Navbar;