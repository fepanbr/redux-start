import './App.css';

import {Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history';

function App() {

  return (
    <Router history={history}>
      <Route path='/' exact component={Home} />
      <Route  path='/todos' component={Todos}/>
      <Route path='/users/' component={Users}/>
      
    </Router>
  )
}

export default App;
