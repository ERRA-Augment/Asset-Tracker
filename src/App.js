import './App.css';
import Logo from "./components/Logo"
import Sidebar from './components/Sidebar'
import Header from './components/Header'




function App() {
  return (
    <div className="container">
        <div className="header__left">Header Left</div>
      <div className='header__mid'>Header Mid</div>
      <div className='header__right'>Header Right</div>
        <div className='sidebar'><Sidebar /></div>
        <div className="body">Body</div>
           
    </div>
  );
}

export default App;
