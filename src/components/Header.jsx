import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  const primaryColor = "var(--primary-color)";
  const headerBgColor = "var(--secondary-color)";
  const textColor = "var(--primary-color)";
  const inputBgColor = "bg-white";
  const indicatorBgColor = "bg-red-600";
  const badgeBgColor = "bg-green-600";
  const hoverBgColor = "hover:bg-gray-400";
  const menuBgColor = "bg-white";
  const menuHoverBgColor = "hover:bg-gray-200";
  const textGrayColor = "var(--primary-color)";

  return (
    <>
      <div className="navbar">
        <div className="flex-1 flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/img/logosemletra.svg"
              alt="logo easycart"
              width={50}
              height={30}
            />
            <Image
              src="/img/logocomnome.svg"
              alt="logo nome easycart"
              width={100}
              height={30}
            />
          </div>
          {/* barra de pesquisa */}
          <div
            className="form-control flex justify-center"
            style={{ marginLeft: "-350px" }}
          >
            <form className="flex items-center relative">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais…"
                className={`input input-bordered nav-search-input w-full ${inputBgColor} ${textGrayColor}`}
                style={{
                  minWidth: "588px",
                  maxWidth: "600px",
                  height: "40px",
                  padding: "10px 15px",
                  borderRadius: "2px",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .2)",
                  borderColor: "rgba(0, 0, 0, 0)",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  color: "rgba(0, 0, 0, .898)",
                }}
                id="cb1-edit"
                name="as_word"
                maxLength="120"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                autoComplete="off"
                aria-activedescendant=""
                aria-controls="cb1-list"
                aria-autocomplete="list"
                aria-expanded="false"
                role="combobox"
              />
              <span
                className="absolute right-12 top-1/2 transform -translate-y-1/2 border-l border-gray-400"
                style={{ height: "50%" }}
              ></span>
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 flex justify-center items-center"
                style={{
                  width: "47px",
                  height: "100%",
                  backgroundColor: "white",
                  borderRadius: "0 2px 2px 0",
                }}
              >
                <Image
                  src="/img/find.svg" // Substitua pelo caminho correto da sua imagem
                  alt="Buscar"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
          {/* botão mudar tema */}
          <div>
            <ToggleThemeButton />
          </div>

          <div className="flex-none space-x-4 flex items-center">
            <label
              className="flex items-center cursor-pointer gap-2"
              style={{ marginLeft: "-350px" }}
            ></label>
            <div
              className="dropdown dropdown-end"
              style={{ marginLeft: "20px" }}
            >
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle ${hoverBgColor}`}
              >
                <div className="indicator">
                  <Image
                    src="/img/cart-icon.png" // Substitua pelo caminho correto da sua imagem
                    alt="Carrinho"
                    width={20}
                    height={20}
                  />
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
            <div
              className="dropdown dropdown-end"
              style={{ marginLeft: "20px" }}
            >
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar ${hoverBgColor}`}
              >
                <Image
                  src="/img/user.svg" // Substitua pelo caminho correto da sua imagem
                  alt="Usuário"
                  width={38}
                  height={38}
                />
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content ${menuBgColor} ${textGrayColor} rounded-box z-[1] mt-3 w-52 p-2 shadow`}
              >
                <li>
                  <Link href="/admin" passHref>
                    Meus Produtos
                    <span className={`badge ${badgeBgColor} ${textColor}`}>
                      New
                    </span>
                  </Link>
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
      </div>
      <div
        className="w-full h-[2px]"
        style={{ backgroundColor: primaryColor }}
      ></div>
    </>
  );
};

export default Header;
