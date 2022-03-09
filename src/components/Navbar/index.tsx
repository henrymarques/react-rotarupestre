import { Main, Menu, Button, Content } from "./styles";

export function Navbar() {
  return (
    <Main>
      <Content>
        <div>
          <a href="/">
            <img src="" alt="Rota Rupestre" />
          </a>
        </div>
        <Menu>
          <a href="/">Início</a>
          <a href="/">Rotas</a>
          <a href="/">Instituições</a>
          <a href="/">Eixos</a>
          <a href="/">Quem somos</a>
        </Menu>
        <div>
          <Button href="/">
            <span>Contato</span>
          </Button>
        </div>
      </Content>
    </Main>
  );
}
