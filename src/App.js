import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";
import { useState } from "react";
import PaginationPage from "./Components/Pagination/Pagination";

function App({ cart, setCart, image, title, price, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [ProductsHome, setProductsHome] = useState([]);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = ProductsHome.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                ProductsHome={currentPosts}
                setProductsHome={setProductsHome}
                image={image}
                title={title}
                price={price}
                data={data}
              />
            }
          />

          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                image={image}
                title={title}
                price={price}
                data={data}
              />
            }
          />
        </Routes>
        <PaginationPage
          totalPosts={ProductsHome.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </CartProvider>
    </div>
  );
}

export default App;
