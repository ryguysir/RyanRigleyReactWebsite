import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//import components
import AboutMePage from "./components/about-me-page/AboutMePage";

import MyWorkPage from "./components/my-work-page/MyWorkPage";

function App() {
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
