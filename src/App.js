import './App.css';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home.js';
import Logout from './components/Logout/Logout.js';
import SignUpContainer from './components/SignUp/SignUpContainer';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signUp" exact component={SignUpContainer} />
        </Switch>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/book" exact component={Book} />
          <Route path="/details/:id" exact component={Details} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div >
  );
}

export default App;
