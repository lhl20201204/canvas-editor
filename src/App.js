import Layout from './Layout';
import './App.css';
import Header from './Layout/Header';
import Content from './Layout/Content'
import {HashRouter} from 'react-router-dom'
function App() {
  return <HashRouter><Layout Header={Header} Content={Content} /> </ HashRouter>;
}

export default App;
