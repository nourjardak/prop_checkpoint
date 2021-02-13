import Profile from "./Folder/Profile"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Table'
import img from "./jenny.jpg"

function App() {
  function handleName(name){alert(`this is an alert for ${name}`)}
  return (
    <div className="App container">
      <Profile name="jenny" profession="singer" bio="loves her job" handleName={handleName}>
         {img}
      </Profile>
    </div>
  );
}

export default App;
