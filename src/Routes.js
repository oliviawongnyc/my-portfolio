import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Projects, Writing, Resume, Contact } from './components';

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/writing' component={Writing} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
