import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Projects, Writing, Resume, Contact } from './components';
import './css/routes.css';

const Routes = () => {
  return (
    <Router>
      <div className='nav-links'>
        <nav>
          <Link to='/projects'>Projects</Link>
          <Link to='/writing'>Writing</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/projects' component={Projects} />
          <Route path='/writing' component={Writing} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
