import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Product from "./Product";
import Admin from "./Admin";
import Login from "./Login";
import Cart from "./Cart";
import SingleProductPage from "./SingleProductPage";
import Payment from "./Payment";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/collection" element={<HomePage />} />
      <Route path="/blog" element={<HomePage />} />
      <Route path="/fashion" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/products" element={<Product />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default MainRoutes;
