import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";

function Navbar() {
  const auth = useAuthContext();

  const isAuth = auth?.user || null;

  const logOut = () => {
    auth.logOut();
  };
  return (
    <nav className="flex items-center justify-between bg-white h-20 text-gray-600 w-full px-60">
      <div className="flex">
        <div className="justify-start items-start"><img src="https://lh3.googleusercontent.com/pw/AIL4fc8aIpY53QbrL46D5t61nuHbJ21NMenwpRw7vaQBuqZyg2vnnlq7gukXbGtYt37XSpLLO2HkLF4QqmTVrMnpzfdELCWEcKmTJnvPkUg8-N3k6FBkGH0ErWN1VjFBkZtUNCvR8tYiu1PUj5otpGNCYeP0Z0JeAE2nOh2Rsts7e5tiMGPvuUuSvmY9UWUpazkbzwPV5ySUJrN66yzdTVX541Qma3BL8qz2AMCfW8cHAWAIaSn6LlricdI02vOEHT0PvttCkQQhx0CKc-9gNue35lxnZRxeG1xdNeAt7VsasIWtJpXWLoM2FIYJUgKpnYtAhjZwdliRIuZdVr2N_Fu-wVcy5SJS7yMtFCwHNFPYMFxrgS3AeIUTzFA9NnhsyZGb0GxhasVQTgHrg3fMvye8Im-dQ4i5ZysWRv2BCgVopC_ywRTxZYZFrmKKCDZlov5i44kGVLyb3nSq6sCX3mQw_8CjI7OK-kw8FKMA_0HVBRaxjEcI6DepNUIDR_ENXbyO--xI-GDe6qmmhFtgIsO_c5piqIqw4eD5Pbunbz8w_dK2YZGxhyzU5B-av8k3zdoY9k1ylXzqVGKv4HMGyV3SH4bViU7u659B6hSM8RznkSYMDOMYQwkDBooh5Sp2p2aXY_Z3AyKq075lqzqJfv7VOlZRuYz-wsl7jasjYOfhbqV1Kg4pSEJYeazOvDjqlF9LEUDPyUlvdEgNTMtvnde4EMVU-PiQ52OZ9Es71IBPPbIlDvmzwi5ijVcVjhmyrSFmOCCzTQf5l5HKmYre91Te3v5qgU53XJVCqIGH-Mmj4MCPws38SxgGRTve7YXtWU3G2w1pkOUrxPx9D23j26S2r_mGEI5RNCp97VbXTuVVCvKAKLhPzSFgg3BFlu6ws2yTOj-uPhTIHdcVrvNkm1ZdFGbF=w893-h893-s-no?authuser=0" alt="logo" className="h-20 " /></div>
        
      </div>
      <div>
        <ul className="flex gap-6 items-center">
          <li>
            {" "}
            <Link to="/">
              <i className="fa-sharp fa-solid fa-house mr-1"></i>Home
            </Link>{" "}
          </li>
          {isAuth ? (
            <>
              {" "}
              <li>
                {" "}
                <Link to="/products">
                  <i className="fa-regular fa-calendar-days mr-1"></i>Products
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link to="/cart">
                  <i className="fa-regular fa-calendar-days mr-1"></i>Search history
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