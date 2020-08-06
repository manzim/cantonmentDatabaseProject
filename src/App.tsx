import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ProjectLandingPage } from './components/landingPage';
import { BiodataForm } from './components/biodataForm';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
      {/* <BiodataForm/>
      <ProjectLandingPage/> */}
      <BrowserRouter>
        <Switch>
          {/* <React.Suspense fallback={<div>loading...</div>}> */}
          <Route path="/" exact={true} component={ProjectLandingPage} />
          <Route path="/biodataform" exact={true} component={BiodataForm} />
          <Route path="/signin" exact={true} component={SignIn} />
          <Route path="/signup" exact={true} component={SignUp} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
