//packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

//pages
import Home from './Home/Home';
import Information from './Information/Information';

//utils
import '../utils/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="mt-5">
          <main className="p-5">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Information" exact>
                <Information />
              </Route>
            </Switch>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
