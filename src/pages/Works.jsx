import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

const Works = () => {
    return (
    <div className="works">
      <Navbar />
      travail
      
            <ul>
                <li>
                    <Link to="/works/platon-study-case">Platon</Link>
                </li>
                <li>
                    <Link to="/works/solane-study-case">Solane</Link>
                </li>
                <li>
                    <Link to="/works/sedal-study-case">Sedal</Link>
                </li>
            </ul>
    </div>
    );
} 
  export default Works;