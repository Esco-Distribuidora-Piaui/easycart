import React from "react";
import Image from "next/image";

export default function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
        <Image
          alt="Sua Empresa"
          src="/img/logocompleta.svg"
          width={100}
          height={70}
          className="mx-auto h-36 w-auto mb-2"
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Entrar na sua conta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço de Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-gray-100 hover:border-indigo-600 hover:shadow-md transition duration-200 ease-in-out"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-gray-100 hover:border-indigo-600 hover:shadow-md transition duration-200 ease-in-out"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Não tem uma conta?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Inscreva-se
          </a>
        </p>
      </div>
    </div>
  );
}
