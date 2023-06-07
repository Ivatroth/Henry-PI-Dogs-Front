import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
    <div className='nav'></div>
        
        <div className='men' >
          <div className='titule'>
              <Link  className='lincks' to="/home"><h3>Home </h3></Link>
          </div>
          <div  className='titule'>
              <Link  className='lincks' to="/dogs"><h3> Creación de Razas</h3></Link>
          </div>
        </div>
    </nav>

  );
}

export default Nav;