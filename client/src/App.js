
import ProductsList from "./components/ProductsList";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import ProductsHome from "./components/ProductsHome";

import AuthProvider from "./providers/Auth.provider";
const SecureRoute = (Component) => {
  return (
    <AuthProvider required={true}>
      <Navbar />
      <Component />
    </AuthProvider>
  );
};

const BaseRoute = (Component) => {
  return (
    <AuthProvider required={false}>
      <Navbar />
      <Component />
    </AuthProvider>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={BaseRoute(Home)}></Route>
        <Route path="/signIn" element={BaseRoute(SignIn)}></Route>
        <Route path="/signUp" element={BaseRoute(SignUp)}></Route>
        <Route
          path="/ProductDetails/:id"
          element={SecureRoute(ProductDetails)}
        ></Route>
        <Route path="/products" element={SecureRoute(ProductsList)}></Route>
        <Route path="/ProductsHome" element={SecureRoute(ProductsHome)}></Route>
        <Route path="/ProductsList" element={SecureRoute(ProductsList)}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;