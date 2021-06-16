import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ReactGa from "react-ga";
import { createBrowserHistory } from "history";

import "./App.css";

//import components
import AboutMePage from "./components/about-me-page/AboutMePage";

import MyWorkPage from "./components/my-work-page/MyWorkPage";

function App() {
  //Google analytics
  var history = createBrowserHistory();

  useEffect(() => {
    ReactGa.initialize("G-3NF43NTEZV");
    //monitor page views
    ReactGa.pageview("/");
    ReactGa.pageview("/my-work");
  }, []);
  //states
  const [currentTags, setCurrentTags] = useState([]);
  const [videoPanelObject, setVideoPanelObject] = useState({
    hidden: true,
    videos: [],
    videoNumber: 0,
  });

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={(props) => <AboutMePage {...props} />} />

          <Route
            path="/my-work"
            render={(props) => (
              <MyWorkPage
                {...props}
                currentTags={currentTags}
                setCurrentTags={setCurrentTags}
                videoPanelObject={videoPanelObject}
                setVideoPanelObject={setVideoPanelObject}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
