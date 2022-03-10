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
          <Link to="/">Início</Link>
          <Link to="/cidades">Cidades</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/instituicoes">Instituições</Link>
          <Link to="/eixos">Eixos</Link>
          <a href="/equipe">Equipe</a>
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
