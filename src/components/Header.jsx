import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
      <div
        className="navbar"
        style={{ backgroundColor: headerBgColor, color: textColor }}
      >
        <div className="flex-1 flex justify-between items-center">
          <Link href="/" passHref>
            <span className="btn btn-ghost text-xl flex items-center cursor-pointer">
              <img
                src="/WhatsApp_Image_2024-08-11_at_14.50.56-removebg-preview.png"
                alt="Logo"
                style={{ width: "150px", height: "45px" }} // Ajuste o tamanho conforme necessário
              />
            </span>
          </Link>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                  fill="currentColor"
                  className="text-black"
                >
                  <g transform="translate(0,512) scale(0.1,-0.1)">
                    <path
                      d="M2031 4999 c-711 -54 -1354 -518 -1633 -1177 -279 -659 -178 -1408
                    266 -1977 62 -79 214 -233 301 -305 591 -485 1416 -576 2114 -234 73 36 134
                    64 136 62 19 -22 287 -353 492 -608 459 -571 450 -560 527 -600 61 -31 77 -35
                    150 -35 72 0 89 4 146 32 36 18 106 69 157 113 189 166 233 302 153 466 -27
                    55 -85 115 -488 510 -251 246 -493 482 -537 525 l-79 78 24 33 c111 148 224
                    362 284 534 199 578 116 1215 -222 1720 -336 501 -873 815 -1476 864 -141 11
                    -162 11 -315 -1z m442 -374 c313 -57 597 -202 829 -423 241 -231 396 -511 470
                    -854 32 -149 32 -457 0 -604 -138 -640 -626 -1129 -1259 -1264 -125 -27 -382
                    -37 -508 -21 -578 76 -1072 459 -1290 1002 -51 127 -90 276 -106 413 -15 127
                    -6 350 20 478 136 671 676 1187 1341 1284 119 17 380 11 503 -11z"
                    />
                  </g>
                </svg>
              </button>
            </form>
          </div>
          <div className="flex-none space-x-4 flex items-center">
            {/* Adicionando o controle de tema com os ícones de sol e lua */}
            <label
              className="flex items-center cursor-pointer gap-2"
              style={{ marginLeft: "-350px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="toggle theme-controller"
                aria-label="Toggle dark mode"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
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
            <div
              className="dropdown dropdown-end"
              style={{ marginLeft: "20px" }}
            >
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar ${hoverBgColor}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                  fill="currentColor"
                >
                  <g transform="translate(0,512) scale(0.1,-0.1)">
                    <path
                      d="M2380 5114 c-19 -2 -78 -9 -130 -14 -330 -36 -695 -160 -990 -336
                      -375 -224 -680 -529 -904 -904 -175 -292 -291 -632 -338 -990 -16 -123 -16
                      -497 0 -620 82 -623 356 -1150 820 -1581 256 -239 575 -425 922 -539 274 -91
                      491 -124 800 -124 228 0 329 9 530 50 689 141 1304 583 1674 1204 175 292 291
                      632 338 990 16 123 16 497 0 620 -47 358 -163 698 -338 990 -224 375 -529 680
                      -904 904 -289 173 -634 291 -980 336 -88 12 -438 21 -500 14z m405 -1124 c247
                      -64 468 -245 580 -475 70 -142 88 -224 88 -395 0 -118 -4 -160 -22 -225 -68
                      -251 -246 -468 -476 -580 -91 -45 -223 -85 -278 -85 -60 0 -18 -10 100 -25
                      529 -66 994 -354 1287 -799 78 -118 180 -329 171 -355 -3 -11 -52 -63 -107
                      -116 -340 -323 -748 -528 -1208 -606 -113 -19 -172 -23 -360 -23 -188 0 -247
                      4 -360 23 -460 78 -868 283 -1208 606 -55 53 -104 105 -107 116 -9 26 93 237
                      171 355 293 445 758 733 1287 799 118 15 160 25 100 25 -55 0 -187 40 -278 85
                      -230 112 -408 329 -476 580 -18 65 -22 107 -22 225 0 171 18 253 88 395 123
                      253 366 437 642 490 105 20 282 13 388 -15z"
                    />
                  </g>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content ${menuBgColor} ${textGrayColor} rounded-box z-[1] mt-3 w-52 p-2 shadow`}
              >
                <li>
                  <Link href="/admin" passHref>
                    {/* <a className={`justify-between ${menuHoverBgColor}`}> */}
                    Meus Produtos
                    <span className={`badge ${badgeBgColor} ${textColor}`}>
                      New
                    </span>
                    {/* </a> */}
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
