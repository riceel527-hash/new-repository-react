import Discounted from './Components/Discounted';
import Featured from './Components/Featured';
import Highlights from './Components/Highlights';
import Nav from './Components/Nav';
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;



