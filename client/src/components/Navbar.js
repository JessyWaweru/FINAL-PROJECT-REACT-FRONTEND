import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {faHistory} from "@fortawesome/free-solid-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const auth = useAuthContext();

  const isAuth = auth?.user || null;

  const logOut = () => {
    auth.logOut();
  };
  return (
    <nav className="flex items-center justify-between bg-white h-20 text-gray-600 w-full px-60">
      <div className="p-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      
       <h3 className="text-4xl font-bold text-white text-center mb-0"><FontAwesomeIcon icon={faShoppingBag} className="fa-solid"/>Shopcrawl</h3>
        
      </div>
      
      <div>
        <ul className="flex gap-6 items-center">
          <li>
            {" "}
            <Link to="/">
             <FontAwesomeIcon icon={faHouse} className="mr-1"/>Home
            </Link>{" "}
          </li>
          {isAuth ? (
            <>
              {" "}
              <li>
                {" "}
                <Link to="/products">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1"/>Products
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link to="/cart">
                <FontAwesomeIcon icon={faHistory} className="mr-1"/>Search history
                </Link>{" "}
              </li>{" "}
              <li
                onClick={logOut}
                className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80 cursor-pointer"
              >
                {" "}
                <i className="fa-solid fa-right-from-bracket mr-1"></i>
                Logout
              </li>
            </>
          ) : null}

          {!isAuth ? (
            <>
              {" "}
              <li>
                {" "}
                <Link to="/signIn">
                  <i className="fa-solid fa-right-to-bracket mr-1"></i>Login
                </Link>{" "}
              </li>
              <li className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80">
                {" "}
                <Link to="/signUp">
                  Signup<i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>{" "}
              </li>{" "}
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;