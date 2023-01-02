import './App.css'
import Sidebar from './component/Sidebar/Sidebar.jsx';
import MainDash from './component/mainDash/MainDash';
import RightSide from "./component/rightSide/RightSide.jsx"

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        
        
          
        </div>
    </div>
  );
}

export default App;
