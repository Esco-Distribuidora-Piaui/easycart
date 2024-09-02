import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import ToggleThemeButton from "./ToggleThemeButton";
import ShoppingCart from "./ShoppingCart";
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const { cartItems } = useCart();

  return (
    <>
      <div className="px-4 py-4 sm:px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* logo */}
          <Image
            src="/img/logosemletra.svg"
            alt="logo easycart"
            width={50}
            height={30}
          />
          <Image
            src="/img/logocomnome.svg"
            alt="logo nome easycart"
            width={150}
            height={30}
          />
        </div>

        {/* barra de pesquisa */}
        <div className="flex items-center relative">
          <form className="flex items-center relative">
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais…"
              className="min-w-[58px] w-[588px] h-10 p-2.5 rounded-l border-none shadow-md text-base bg-white text-black"
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
            <button type="submit" className="w-12 h-10 bg-white rounded-r flex justify-center items-center shadow-md">
              <Image
                src="/img/find.svg"
                alt="Buscar"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>

        {/* botão mudar tema, carrinho de compra, e usuário */}
        <div className="flex items-center space-x-4">
          <ToggleThemeButton />
          {/* carrinho de compra */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-gray-400"
            >
              <div className="indicator">
                <Image
                  src="/img/cartbuton.svg"
                  alt="Carrinho"
                  width={35}
                  height={20}
                />
                <span className="badge badge-sm indicator-item bg-red-600 text-primary">
                  {cartItems.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-white text-primary z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cartItems.length} Produto(s)
                </span>
                <span className="text-info">
                  <p>Subtotal:
                    R$
                    {cartItems.reduce((total, item) => {
                      const priceNumber = parseFloat(item.price.replace('R$', '').replace(',', '.').trim());
                      return total + priceNumber * item.quantity;
                    }, 0).toFixed(2)}
                  </p>
                </span>
                 <div className="card-actions">
                  <button onClick={toggleCart}>
                    Ver Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* botao user */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-gray-400"
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
              className="menu menu-sm dropdown-content bg-white text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
      {/* linha horizontal embaixo do header */}
      <div className="w-full h-[2px] bg-primary"></div>
      <ShoppingCart isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Header;
