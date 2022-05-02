import { Main, Menu, Button, Content, Logo } from "./styles";

export function Navbar() {
  return (
    <Main>
      <Content>
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
