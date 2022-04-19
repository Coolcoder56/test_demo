import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Registrationpage from "./Pages/Registrationpage";
import Loginpage from "./Pages/Loginpage";
import ProductInfo from "./Pages/ProductInfo";
import Cartpage from "./Pages/Cartpage";
import "./stylesheets/layout.css";
import "./stylesheets/products.css";
import "./stylesheets/authentication.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./Components/NotFoundPage";
import "./stylesheets/banner.css";
import Cloths from "./Pages/Cloths";
import Electronics from "./Pages/Electronics";
import Specialpri from "./Pages/Specialpri";
import Contact from 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/Components/Contact.js'



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Homepage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/cloths"
            element={
              <ProtectedRoutes>
                <Cloths />
              </ProtectedRoutes>
            }
          />
           <Route
            path="/Electronics"
            element={
              <ProtectedRoutes>
                <Electronics />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/Contact"
            element={
              <ProtectedRoutes>
                <Contact />
              </ProtectedRoutes>
            }
          />
           <Route
            path="/Specialpri"
            element={
              <ProtectedRoutes>
                <Specialpri />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registrationpage />} />
          <Route path="/Maintainance" element={<NotFoundPage/>} />
          <Route
            path="/productinfo/:productid"
            element={
              <ProtectedRoutes>
                <ProductInfo />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoutes>
                <Cartpage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("CurrentUser")) {
    return children;
  } else {
   return <Navigate to="/login" />;
  }
};
