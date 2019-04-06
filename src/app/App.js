import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from 'app/containers/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
