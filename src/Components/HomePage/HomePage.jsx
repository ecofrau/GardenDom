import React from "react";
import DiscountBanner from "./DiscountBanner/DiscountBanner";
import SaleForm from "./SaleForm/SaleForm";
import SaleCardHolder from "./SaleCardHolder/SaleCardHolder";
import Categories from "./Categories/Categories";
// import ProductList from "../ProductListening/ProductList";
// import ProductPage from "../ProductPage/ProductPage";

function HomePage() {
	return (
		<div>
			<DiscountBanner />
			<Categories />	
			{/* <ProductList />
			<ProductPage /> */}
			<SaleForm />
			<SaleCardHolder />
			
		</div>
	);
}

export default HomePage;
