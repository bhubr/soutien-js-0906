import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import './App.css';
import './components/PostList.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:userId/:postId" component={PostDetails} />
      </Switch>
    </div>
  );
}

export default App;
