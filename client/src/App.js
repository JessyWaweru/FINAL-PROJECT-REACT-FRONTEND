
import ProductsList from "./components/ProductsList";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
        <Route path="/products" element={SecureRoute(PrductsList)}></Route>
        <Route path="/ProductsHome" element={SecureRoute(ProductsHome)}></Route>
        <Route path="/reset" element={BaseRoute(ResetPassword)}></Route>
        <Route path="/ProductsList" element={SecureRoute(ProductsList)}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;