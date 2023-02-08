import {Link} from "react-router-dom";

const Navbar = () => {
    return (

    <div className="navbar">
      
        <Link to ="/">home</Link>
        <Link to ="/about">about</Link>
        <Link to ="/works">works</Link>

    </div>
  );
}
  export default Navbar;