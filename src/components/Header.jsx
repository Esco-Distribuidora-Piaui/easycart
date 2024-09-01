import React from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleThemeButton from "./ToggleThemeButton";
import styles from "../styles/Header.module.css"; // Importando o CSS corretamente

const Header = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={`${styles["flex-container"]} flex-1`}>
          {/* logo */}
          <div className={styles["logo-container"]}>
            <Image
              src="/img/logosemletra.svg"
              alt="logo easycart"
              width={50}
              height={30}
              className={styles.logoIcon}
            />
            <Image
              src="/img/logocomnome.svg"
              alt="logo nome easycart"
              width={150}
              height={30}
              className={styles.logoText}
            />
          </div>

          {/* barra de pesquisa */}
          <div className={`${styles["search-form"]} form-control`}>
            <form className="flex items-center relative">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais…"
                className={`${styles["search-input"]} input input-bordered nav-search-input`}
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
              <button type="submit" className={styles["search-button"]}>
                <Image
                  src="/img/find.svg"
                  alt="Buscar"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
          {/* botão mudar tema */}
          <div className="tema flex items-center space-x-4">
            <ToggleThemeButton />
            {/* carrinho de compra */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle hover:bg-gray-400`}
              >
                <div className="indicator">
                  <Image
                    src="/img/cartbuton.svg"
                    alt="Carrinho"
                    width={35}
                    height={20}
                  />
                  <span className="badge badge-sm indicator-item bg-red-600 text-primary">
                    8
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className={`card card-compact dropdown-content bg-white text-primary z-[1] mt-3 w-52 shadow`}
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

            {/* botao user */}
            <div className="dropdown dropdown-end2">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar hover:bg-gray-400`}
              >
                <Image
                  src="/img/user.svg"
                  alt="Usuário"
                  width={38}
                  height={38}
                />
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content bg-white text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow`}
              >
                <li>
                  <Link href="/admin" passHref>
                    Meus Produtos
                    <span className="badge bg-green-600 text-primary">New</span>
                  </Link>
                </li>
                <li>
                  <a className="hover:bg-gray-200">Settings</a>
                </li>
                <li>
                  <a className="hover:bg-gray-200">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* linha horizontal embaixo do header */}
      <div
        className="w-full h-[2px]"
        style={{ backgroundColor: "var(--primary-color)" }}
      ></div>
    </>
  );
};

export default Header;
