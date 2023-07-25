import React from "react";
import Highlights from "./Highlights";
import { Link } from "react-router-dom";
import ProductsHome from "./ProductsHome";
import { useAuthContext } from "../providers/Auth.provider";

function Home() {
  const auth = useAuthContext();
  const isAuth = auth?.user;
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-[98%] flex items-center w-full justify-end pr-40 bg-[url(https://img.freepik.com/free-photo/blue-designed-grunge-concrete-texture-vintage-background-with-space-text-image_1258-108928.jpg)] bg-cover">
          <video autoPlay muted loop className="h-5/6">
            <source
              src="https://player.vimeo.com/external/388150686.sd.mp4?s=2fb9355a498bb187f4d68c285f732c27a486961c&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text-white text-xl flex flex-col pl-40 justify-center gap-6 absolute top-20 bg-white/30 h-full w-full">
          <h1 className="text-6xl font-semibold uppercase">
            Welcome to<br />
            <span className="text-rose-600">SHOPCRAWL</span>
          </h1>
          <p>
            Discover dynamic ways to view your online shopping experience
            <br />compare stores
             <br />
           SHOPCRAWL has got you covered
          </p>
          {!isAuth ? (
            <Link to="/signIn">
              <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
                Get started <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </Link>
          ) : (
            <Link to="/events">
              <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
                <i className="fa-solid fa-calendar-days mr-2"></i>See all Products
                <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </Link>
          )}
        </div>
      </div>
      <Highlights />
      <ProductsHome />
    </div>
  );
}

export default Home;
