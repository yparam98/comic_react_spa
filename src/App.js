import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComicStrip from './Components/Strip';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div id="page-cont">
      <h1><a href="/" style={{textDecoration: 'none', color: 'black'}}>XKCD Comic Reader</a></h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/comic" component={ComicStrip} />
          <Route exact path="/comic/:num" component={ComicStrip} />
          <Route path="" component={Welcome}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;