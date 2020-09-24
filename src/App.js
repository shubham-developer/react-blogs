import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";

const Home = React.lazy(() => import("./Pages/Home"));
const PostDetail = React.lazy(() => import("./Pages/PostDetail"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/post-detail">
                    <PostDetail />
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
