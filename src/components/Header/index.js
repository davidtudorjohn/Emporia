import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronCircleUp,
  faShoppingCart,
  faPrescriptionBottleAlt,
  faCookieBite,
  faPrescription,
  faTree,
  faMortarPestle,
  faHands
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import NavItem from "../NavItem";
import { useSelector } from "react-redux";
const Header = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMainMenuOpen(false);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSubMenuOpen(false);
  };
  const cart = useSelector(state => state.cart);
  let cartCount = 0;
  for (let i = 0; i < cart.length; i++) {
    cartCount += cart[i].quantity;
  }
  return (
    <div>
      <header id="header">
        <h1 id="logoHeader">
          <Link onClick={closeMenu} className="routerLink" to="/">
            Emporia
          </Link>
        </h1>
        <nav>
          <ul id="navList">
            <Link onClick={closeMenu} className="routerLink" to="/new-arrivals">
              <NavItem content="New Arrivals" />
            </Link>
            <button
              id="mainMenuToggle"
              className="routerLink"
              onMouseOver={() => setIsMainMenuOpen(true)}
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
            >
              Shop{" "}
              {isMainMenuOpen ? (
                <FontAwesomeIcon id="menuChevron" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon id="menuChevron" icon={faChevronDown} />
              )}
            </button>
            <Link onClick={closeMenu} className="routerLink" to="/about">
              <NavItem content="About" />
            </Link>
            <Link onClick={closeMenu} className="routerLink" to="/rewards">
              <NavItem content="Rewards" />
            </Link>
            <Link onClick={closeMenu} className="routerLink" to="/login">
              <NavItem class="login" content="Log In" />
            </Link>
            <Link onClick={closeMenu} className="routerLink" to="/register">
              <NavItem class="register" content="Register" />
            </Link>
            <Link onClick={closeMenu} className="routerLink" to="/cart">
              <NavItem
                content=""
                icon={faShoppingCart}
                cart={cart.length > 0 ? cartCount : ""}
              />
            </Link>
          </ul>
          {isMainMenuOpen && (
            <div id="mainMenu" onMouseLeave={closeMenu}>
              <h3 id="mainMenuHeading">Shop by Category</h3>
              <Link
                onClick={closeMenu}
                className="routerLink"
                to="/shop/vitamins-supplements"
              >
                <div className="mainMenuItem">
                  <FontAwesomeIcon
                    className="menuItemIcon"
                    icon={faPrescriptionBottleAlt}
                  />
                  <p>Vitamins & Supplements</p>
                </div>
              </Link>
              <Link
                onClick={closeMenu}
                className="routerLink"
                to="/shop/skin-care"
              >
                <div className="mainMenuItem">
                  <FontAwesomeIcon className="menuItemIcon" icon={faHands} />
                  <p>Skin Care</p>
                </div>
              </Link>
              <Link
                onClick={closeMenu}
                className="routerLink"
                to="/shop/probiotics"
              >
                <div className="mainMenuItem">
                  <FontAwesomeIcon
                    className="menuItemIcon"
                    icon={faMortarPestle}
                  />
                  <p>Probiotics</p>
                </div>
              </Link>
              <Link
                onClick={closeMenu}
                className="routerLink"
                to="/shop/mens-health"
              >
                <div className="mainMenuItem">
                  <FontAwesomeIcon
                    className="menuItemIcon"
                    icon={faPrescription}
                  />
                  <p>Men's Health</p>
                </div>
              </Link>
              <Link
                onClick={closeMenu}
                className="routerLink"
                to="/shop/childrens-health"
              >
                <div className="mainMenuItem">
                  <FontAwesomeIcon
                    className="menuItemIcon"
                    icon={faCookieBite}
                  />
                  <p>Children's Health</p>
                </div>
              </Link>
              <Link
                onClick={closeMenu}
                className="routerLink"
                to="/shop/holistic"
              >
                <div className="mainMenuItem">
                  <FontAwesomeIcon className="menuItemIcon" icon={faTree} />
                  <p>Holistic</p>
                </div>
              </Link>
              {/* <div>Skin Care</div>
            <div>Mens Health</div>
            <div>Holistic</div>
            <div>Probiotics</div>
            <div>Childrens Health</div> */}
              <button id="closeMenuBtn" onClick={closeMenu}>
                <FontAwesomeIcon icon={faChevronCircleUp} />
              </button>
            </div>
          )}
        </nav>
        <div id="mobileHeaderContent">
          <Link onClick={closeMobileMenu} className="routerLink" to="/cart">
            <NavItem
              content=""
              icon={faShoppingCart}
              cart={cart.length > 0 ? cartCount : ""}
            />
          </Link>
          <button
            id="mobileMenu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          id="mobileMenuContent"
          className={isMobileMenuOpen ? "open" : "closed"}
        >
          <nav>
            <ul>
              <Link
                onClick={closeMobileMenu}
                className="routerLink "
                to="/new-arrivals"
              >
                <NavItem class="mobileMenu" content="New Arrivals" />
              </Link>
              <button
                id="mobileSubMenuToggle"
                className="routerLink"
                // onMouseOver={() => setIsMobileSubMenuOpen(true)}
                onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
              >
                Shop{" "}
                {isMobileSubMenuOpen ? (
                  <FontAwesomeIcon id="menuChevron" icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon id="menuChevron" icon={faChevronDown} />
                )}
              </button>

              {isMobileSubMenuOpen ? (
                <div id="mobileSubMenuContent">
                  {/* <div id="mainMenu" onMouseLeave={closeMenu}>
                    <h3 id="mainMenuHeading">Shop by Category</h3> */}
                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/all-products"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faPrescriptionBottleAlt}
                      />
                      <p>All Products</p>
                    </div>
                  </Link>
                  <br />
                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/vitamins-supplements"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faPrescriptionBottleAlt}
                      />
                      <p>Vitamins & Supplements</p>
                    </div>
                  </Link>
                  <br />
                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/skin-care"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faHands}
                      />
                      <p>Skin Care</p>
                    </div>
                  </Link>
                  <br />

                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/probiotics"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faMortarPestle}
                      />
                      <p>Probiotics</p>
                    </div>
                  </Link>
                  <br />

                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/mens-health"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faPrescription}
                      />
                      <p>Men's Health</p>
                    </div>
                  </Link>
                  <br />

                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/childrens-health"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faCookieBite}
                      />
                      <p>Children's Health</p>
                    </div>
                  </Link>
                  <br />

                  <Link
                    onClick={closeMobileMenu}
                    className="routerLink"
                    to="/shop/holistic"
                  >
                    <div className="mobileSubMenuItem">
                      <FontAwesomeIcon
                        className="mobileItemIcon"
                        icon={faTree}
                      />
                      <p>Holistic</p>
                    </div>
                  </Link>
                </div>
              ) : (
                // </div>
                ""
              )}
              <Link
                onClick={closeMobileMenu}
                className="routerLink"
                to="/about"
              >
                <NavItem class="mobileMenu" content="About" />
              </Link>
              <Link
                onClick={closeMobileMenu}
                className="routerLink"
                to="/rewards"
              >
                <NavItem class="mobileMenu" content="Rewards" />
              </Link>
              <Link
                onClick={closeMobileMenu}
                className="routerLink"
                to="/login"
              >
                <NavItem class="mobileMenu" class="login" content="Log In" />
              </Link>
              <Link
                onClick={closeMobileMenu}
                className="routerLink"
                to="/register"
              >
                <NavItem class="mobileMenu register" content="Register" />
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Header;
