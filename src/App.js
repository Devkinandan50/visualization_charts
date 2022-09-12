import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Bar from './components/bar/Bar';
import Pie from './components/pie/Pie';
import Areachart from './components/areachart/Areachart';
import Heatmap from './components/heatmap/Heatmap';
import Linechart from './components/linechart/Linechart';
import Radar from './components/radar/Radar';
import Scatterplot from './components/scatterplot/Scatterplot';
import Sunburst from './components/sunburst/Sunburst';
import Treemap from './components/treemap/Treemap';
import Face_reco from './components/face_reco/Face';



import Home from './components/home';
function App() {
  return (
    <Router>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/bar">
                <Bar />
              </Route>
              <Route exact path="/Pie">
                <Pie />
              </Route>
              <Route exact path="/areachart">
                <Areachart />
              </Route>
              <Route exact path="/linechart">
                <Linechart />
              </Route>
              <Route exact path="/heatmap">
                <Heatmap />
              </Route>
              <Route exact path="/radar">
                <Radar />
              </Route>
              <Route exact path="/scatterplot">
                <Scatterplot />
              </Route>
              <Route exact path="/Sunburst">
                <Sunburst />
              </Route>
              <Route exact path="/Treemap">
                <Treemap />
              </Route>
              <Route exact path="/face_reco">
                <Face_reco />
              </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
