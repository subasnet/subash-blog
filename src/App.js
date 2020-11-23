import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">  
          <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} exact/>
          <Route path="/articles-list" component={ArticlesListPage} exact/>
          <Route path="/article/:name" component={ArticlePage} exact/>
          <Route component={NotFoundPage} />
          </Switch>
          
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
