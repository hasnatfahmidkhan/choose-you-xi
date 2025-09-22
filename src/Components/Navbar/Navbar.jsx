import React from "react";
import navLogo from "../../assets/logo.png";
import currencyImg from "../../assets/Currency.png";
const Navbar = () => {
  return (
    <nav className="navbar md:py-8">
      {/* ===== Left: Logo ===== */}
      <div className="flex-1">
        <a href="/" className="text-2xl font-bold">
          <img
            className="w-[50px] h-[50px] object-cover"
            src={navLogo}
            alt=""
          />
        </a>
      </div>
      {/* ===== Right: Nav Links ===== */}
      <div className="flex-none">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex items-center gap-4 font-medium text-gray-500">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>

          <li>
            <a href="#">Schedules</a>
          </li>
          <li>
            <button

              className="btn font-medium inline-flex items-center"
            >
              <span>100,000,000</span>Coin <img src={currencyImg} alt="" />
            </button>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-1 text-gray-600 shadow bg-base-100 rounded-box w-56"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>

            <li>
              <a href="#">Schedules</a>
            </li>
            <li>
              <button className="inline-flex font-medium text-black">
                <span>0</span>Coin <img src={currencyImg} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
