import React from "react";
import Link from "next/link";

const Header = () => {
  const primaryColor = "var(--primary-color)";
  const headerBgColor = "var(--secondary-color)"; // Cor de fundo do header alterada para azul
  const textColor = "var(--primary-color)"; // Cor do texto alterada para branco
  const inputBgColor = "bg-white";
  const indicatorBgColor = "bg-red-600";
  const badgeBgColor = "bg-green-600";
  const hoverBgColor = "hover:bg-gray-400"; // Cor de fundo ao passar o mouse alterada para azul escuro
  const menuBgColor = "bg-white";
  const menuHoverBgColor = "hover:bg-gray-200";
  const textGrayColor = "var(--primary-color)";

  return (
    <>
      <div
        className="navbar"
        style={{ backgroundColor: headerBgColor, color: textColor }}
      >
        <div className="flex-1">
          <Link href="/" passHref>
            <span className="btn btn-ghost text-xl mr-4 flex items-center cursor-pointer">
              <img src="/logo-esco.png" alt="Logo" className="h-8 w-8 mr-2" />
              EasyCart
            </span>
          </Link>
        </div>
        <div className="flex-none space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Pesquisar Produtos"
              className={`input input-bordered w-24 md:w-auto ${inputBgColor} ${textGrayColor}`}
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost btn-circle ${hoverBgColor}`}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span
                  className={`badge badge-sm indicator-item ${indicatorBgColor} ${textColor}`}
                >
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className={`card card-compact dropdown-content ${menuBgColor} ${textGrayColor} z-[1] mt-3 w-52 shadow`}
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost btn-circle avatar ${hoverBgColor}`}
            >
              <div className="w-10 rounded-full">
                <img alt="User avatar" src="/img/pfp.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content ${menuBgColor} ${textGrayColor} rounded-box z-[1] mt-3 w-52 p-2 shadow`}
            >
              <li>
                <a className={`justify-between ${menuHoverBgColor}`}>
                  Profile
                  <span className={`badge ${badgeBgColor} ${textColor}`}>
                    New
                  </span>
                </a>
              </li>
              <li>
                <a className={menuHoverBgColor}>Settings</a>
              </li>
              <li>
                <a className={menuHoverBgColor}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[2px]"
        style={{ backgroundColor: primaryColor }}
      ></div>
    </>
  );
};

export default Header;
