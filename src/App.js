import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Price from "./Components/Price";
import Cart from "./pages/Cart";



function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} />} />
        <Route path="/cart" element={<Cart books={books} />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;



