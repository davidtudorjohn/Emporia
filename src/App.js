import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import VitaminsPage from "./components/VitaminsPage";
import SkinCarePage from "./components/SkinCarePage";
import ProbioticsPage from "./components/ProbioticsPage";
import MensHealthPage from "./components/MensHealthPage";
import ChildrensHealthPage from "./components/ChildrensHealthPage";
import HolisticPage from "./components/HolisticPage";
// import AllProductsPage from "./components/AllProductsPage";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutPage from "./components/AboutPage";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";
import AllProducstsPage from "./components/AllProductsPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/shop/vitamins-supplements"
            component={VitaminsPage}
          />
          <Route exact path="/shop/skin-care" component={SkinCarePage} />
          <Route exact path="/shop/probiotics" component={ProbioticsPage} />
          <Route exact path="/shop/mens-health" component={MensHealthPage} />
          <Route
            exact
            path="/shop/childrens-health"
            component={ChildrensHealthPage}
          />
          <Route exact path="/shop/all-products" component={AllProducstsPage} />
          <Route exact path="/shop/holistic" component={HolisticPage} />
          <Route exact path="/shop/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/terms" component={TermsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
