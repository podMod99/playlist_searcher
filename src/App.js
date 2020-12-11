import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Video from './components/videos/Video';
import Home from './components/pages/Home';
import About from './components/pages/About';

import YoutubeState from './context/youtube/YoutubeState';

function App() {
  return (
    <YoutubeState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/video/:id' component={Video} />
            </Switch>
          </div>
        </div>
      </Router>
    </YoutubeState>
  );
}

export default App;
