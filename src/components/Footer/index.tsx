import { Button, FooterTag } from "./styles";

export function Footer() {
  return (
    <FooterTag>
      <div>
        <span>Copyright &copy; {new Date().getFullYear()} Rota Rupestre</span>
      </div>
      <div>
        <span>
          Feito por <i>Kathistó Tria</i>
        </span>
      </div>
      <div className="SocialMedia">
        <Button href="/">Facebook</Button>
        <Button href="/">Twitter</Button>
        <Button href="/">Instagram</Button>
      </div>
    </FooterTag>
  );
}
