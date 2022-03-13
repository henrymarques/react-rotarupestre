import { Link } from "react-router-dom";

import { Main, Menu, Button, Content, Logo } from "./styles";

export function Navbar() {
  return (
    <Main>
      <Content>
        <div>
          <Link to="/">
            <Logo>Rota Rupestre</Logo>
          </Link>
        </div>
        <Menu>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/cidades">Cidades</Link>
          </li>
          <li>
            <Link to="/noticias">Notícias</Link>
          </li>
          <li>
            <Link to="/instituicoes">Instituições</Link>
          </li>
          <li>
            <Link to="/eixos">Eixos</Link>
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
