import Discounted from './Components/Discounted';
import Explore from './Components/Explore';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
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
      <Explore />
    </div>
  );
}

export default App;



