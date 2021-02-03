import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import register from './components/register';
import main from './components/main';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {register}></Route>
            <Route path = "/main" component = {main}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
