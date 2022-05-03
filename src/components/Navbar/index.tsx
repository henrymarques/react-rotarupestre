import { useState } from "react";

import { Main, Menu, Button, Content, Logo, StyledBurger } from "./styles";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Main>
      <StyledBurger
        className={isOpen ? "open" : "closed"}
        onClick={handleToggle}
      >
        <div />
        <div />
        <div />
      </StyledBurger>

      <Content className={isOpen ? "open" : "closed"}>
        <div>
          <a href="/">
            <Logo>Rota Rupestre</Logo>
          </a>
        </div>
        <Menu>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/cidades">Cidades</a>
          </li>
          <li>
            <a href="/noticias">Notícias</a>
          </li>
          <li>
            <a href="/instituicoes">Instituições</a>
          </li>
          <li>
            <a href="/eixos">Eixos</a>
          </li>
          <li>
            <a href="/equipe">Equipe</a>
          </li>
        </Menu>
        <div>
          <Button href="/contato">
            <span>Contato</span>
          </Button>
        </div>
      </Content>
    </Main>
  );
}
