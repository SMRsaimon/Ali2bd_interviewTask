import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./LayOut";
import ProductDetails from "./pages/ProductDetails";
import { fetchProductDetails } from "./reduxStore/Product/getProductDetails/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayOut>
            <ProductDetails />
          </LayOut>
        }
      />
    </Routes>
  );
}

export default App;
