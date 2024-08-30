import React from "react";
import Login from "@/components/Login";

export default function Home() {
  const handleLogin = () => {
    console.log("Login realizado com sucesso!");
  };

  return <Login onLogin={handleLogin} />;
}
