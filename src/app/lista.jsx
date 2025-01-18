"use client";
import { useState } from "react";
import "./globals.css";
import { IoIosLink } from "react-icons/io";

export default function Lista() {
  const [frameworks, setFrameworks] = useState([
    {
      id: 1,
      nome: "Next.js	",
      links: ["https://nextjs.org/"],
    },
    {
      id: 2,
      nome: "Gatsby",
      links: ["https://www.gatsbyjs.com/"],
    },
    {
      id: 3,
      nome: "Grommet",
      links: ["https://v2.grommet.io/"],
    },
  ]);

  const [novonome, setNovoNome] = useState("");
  const [novolink, setNovolink] = useState([""]);

  const addFramework = (e) => {
    e.preventDefault();

    const linksArray = novolink
      .split(",")
      .map((link) => link.trim())
      .filter((link) => link);

    setFrameworks((prevArray) => [
      ...prevArray,
      {
        id: prevArray.length + 1,
        nome: novonome,
        links: linksArray,
      },
    ]);
    setNovoNome("");
    setNovolink("");
  };

  return (
    <div>
      <h1>Listas de Frameworks do React JS</h1>

      <ul className="lista">
        {" "}
        {/* Adicionar o conteudo do formulario na tela */}
        {frameworks.map((frames) => (
          <li key={frames.id}>
            <strong>Framework: </strong>
            {frames.nome}
            <ul>
              {frames.links.map((link, index) => (
                <li key={index}>
                  <strong>
                    <IoIosLink style={{ color: "black", fontSize: "15px" }} />
                  </strong>
                  <a href={link} target="_blank">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <form onSubmit={addFramework}>
        {" "}
        {/* Adicionar conteudo novo a minha const*/}
        <input
          type="text"
          onChange={(e) => setNovoNome(e.target.value)}
          value={novonome}
          required
          placeholder="Digite o nome"
        ></input>
        <input
          type="url"
          onChange={(e) => setNovolink(e.target.value)}
          value={novolink}
          required
          placeholder="Digite o link"
        ></input>
        <button type="Submite">Adicionar</button>
      </form>
    </div>
  );
}
