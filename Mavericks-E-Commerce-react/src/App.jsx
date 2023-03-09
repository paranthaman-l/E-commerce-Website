import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Payment from "./components/pages/Payment";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login page/login";
import Details from "./components/details/details";
import React from "react";
import Profile from "./components/pages/profile";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { States } from "./States";
import SignUp from "./components/form";
import LandingNavbar from "./components/LandingNavabar/LandingNavbar";
import About from "./components/pages/About";
import PaymentSucess from "./components/pages/PaymentSuccessPage";
import ScrollToTop from "./components/ScroolToTop/ScrollToTop";
import Stores from "./components/Stores/Stores";
import Feedback from "./components/Feedback/Feedback";
const MemoNavbar = React.memo(Navbar);
function App() {
  return (
    <div className="App">
      <States>
        {/* <BrowserRouter> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingNavbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/home/:uid"
            element={
              <>
                <MemoNavbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <MemoNavbar />
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <MemoNavbar />
                <Payment />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:pname"
            element={
              <>
                <MemoNavbar />
                <Details />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <MemoNavbar />
                <About />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <MemoNavbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/paymentSuccess"
            element={
              <>
                <MemoNavbar />
                <PaymentSucess />
                <Footer />
              </>
            }
          />
          <Route
            path="/storesDetails"
            element={
              <>
                <MemoNavbar />
                <Stores />
                <Footer />
              </>
            }
          />
          <Route
            path="/feedback"
            element={
              <>
                <MemoNavbar />
                <Feedback />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* </BrowserRouter> */}
        <ScrollToTop />
      </States>
    </div>
  );
}

export default App;
