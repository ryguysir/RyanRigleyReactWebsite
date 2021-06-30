//import React libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGa from "react-ga";

//import CSS
import "./App.css";

//import components
import AboutMePage from "./components/about-me-page/AboutMePage";
import MyWorkPage from "./components/my-work-page/MyWorkPage";
import ProjectPage from "./components/my-work-page/project-components/project-page/ProjectPage";

function App() {
  //Google analytics
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
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <AboutMePage {...props} />} />

          <Route
            path="/my-work"
            exact
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
          <Route
            path="/my-work/:title"
            render={(props) => (
              <ProjectPage
                {...props}
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
