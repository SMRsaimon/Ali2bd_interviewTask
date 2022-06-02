import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import { fetchProductDetails } from "./reduxStore/Product/getProductDetails/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
