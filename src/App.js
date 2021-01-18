import "./App.css";
import Header from "./components/Header";
import RecommendedVideo from "./components/RecommendedVideo";
import Sidebar from "./components/Sidebar";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div class="app__page">
              <SearchPage />
            </div>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
      <div class="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;
