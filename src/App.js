import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/post-detail">
                  <PostDetail />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
