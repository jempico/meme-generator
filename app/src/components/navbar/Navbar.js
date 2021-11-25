import "./navbar.css"

export default function Navbar (props) {
    return(
        <navbar className="navbar"> 
           <div className="navbarIcon">
               <img className="navbarImg" src="trollface.png" alt=""/>
               <h1 className="navbarTitle">{props.title}</h1>
           </div>
           <p className="navbarSubtitle">React Course - Project 3</p>
        </navbar>
    )
}