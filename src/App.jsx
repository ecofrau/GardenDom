import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/ProductListening/ProductList";  
import Header from "./Components/Header/Header";
import ProductPage from "./Components/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header	/>
		<Routes>
    <Route path="/product/:id" component={ProductPage} /> {/* Route for product page */}
	<Route path="/products" element={ProductList} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


