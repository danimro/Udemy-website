import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <PageWrapper>
          <Route
          exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
      </PageWrapper>
    </Router>
  );
}

export default App;
