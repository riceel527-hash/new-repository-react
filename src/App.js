import Footer from "./Components/Footer";
import React, { useState, useEffect }  from "react";
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { auth,db } from './firebase/init';
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  function createPost() {
    const post = {
    title: "Land a $100k job",
    description: "Finish Frontend Simplified",
  };
  addDoc(collection(db, "posts"), post)
}

async function getAllPosts() {
  const { docs } = await getDocs(collection(db, "posts"));
  const posts = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
  console.log(posts);
}

async function getPostById() {
  const hardcodedId = "0Ztslb4ByM0H4tKRdlFa";
  const postRef = doc(db, "posts", hardcodedId);
  const postSnap = await getDoc(postRef);
  const post =postSnap.data();
  console.log(post);
}

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user.email[0].toUpperCase());
      if(user) {
        setUser(user)
      }
    })
    },[]);

  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  
function login() {
  signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((userCredential) => {
      setUser(userCredential.user);
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }

  function logout() {
    signOut(auth);
    setUser(null);

  }

  const [cart, setCart] = useState([]);
  

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1 }])
  }


  function changeQuantity(book, quantity) {
   setCart(
    cart.map((item) =>
        item.id === book.id 
       ? {
        ...item,
          quantity: +quantity,
        }
        : item        
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id ))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
  })
    return counter;
}


  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
  <Router>
    <div className="App">
      <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        {loading ? 'loading...' : user?.email}
        <button onClick={createPost}>Create Post</button>
        <button onClick={getAllPosts}>Get All Posts</button>
        <button onClick={getPostById}>Get Post by ID</button>
        
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route 
        path="/books/:id" 
        element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
         />
        <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;








