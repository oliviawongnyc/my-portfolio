import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/writing'>Writing</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default NavBar;
