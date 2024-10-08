import "./header.css";
import logo from "../logo/image-logo.png";


const Header = ()=>{
    return(
        <div className='header'>
            <img src={logo} alt="image-logo"/>
            <h1>Image Library</h1>
        </div>
    )
}
 export default Header;