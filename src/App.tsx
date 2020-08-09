import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ProjectLandingPage } from './components/landingPage';
import { BiodataForm } from './components/biodataForm';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { ToolBar } from './components/ToolBar';
import { AboutUs } from './components/AboutUs';
import { TableView } from './components/TableView';

function Content(props: { styles: any }) {
  const contentStyle = {
    backgroundImage: `url(https://wallpaperaccess.com/full/5695.jpg)`,
    minHeight: 'inherit'
  };

  return (
    <div style={contentStyle}>
      <BrowserRouter>
        <Switch>
          {/* <React.Suspense fallback={<div>loading...</div>}> */}
          <Route path="/" exact={true} component={ProjectLandingPage} />
          <Route path="/biodataform" exact={true} component={BiodataForm} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/about" exact={true} component={AboutUs} />
          <Route path="/alldata" exact={true} component={TableView} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

function App() {
  const styles = {
    topBarHeight: 70,
    footerMenuHeight: 15
  };
  return (
    <div
      style={{
        //backgroundColor: `rgba(255, 255, 255, 0.05)`,
        minHeight: "100vh",
        position: "relative"
      }}
    >
      <ToolBar styles={styles} />
      <Content styles={styles} />
    </div>
  );
}

export default App;
