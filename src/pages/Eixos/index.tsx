import { Wave } from "../../components/Wave";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { Header, Content, Main } from "./styles";

import { Eixos as EixosSVG, eixoTipos } from "../../components/Eixos";

import pilar from "../../assets/pilar.png";
import seta from "../../assets/seta.png";

export default function Eixos() {
  function handlePathClick(name: eixoTipos) {
    alert(`${name}`);
  }

  return (
    <>
      <Navbar />
      <Header>
        <div className="left">
          <EixosSVG handlePathClick={handlePathClick} />
        </div>
        <div className="right">
          <img className="logo" src={pilar} alt="Logo" />
          <h1>Eixos</h1>
          <span>
            Selecione no diagrama ao lado o eixo que tem interesse em conhecer
          </span>
          <img className="seta" src={seta} alt="Seta" />
        </div>
      </Header>
      <Content>
        <Wave />
        <Main>
          <h2>Eixo 1</h2>
        </Main>
        <Wave className="inverted" />
      </Content>
      <Footer />
    </>
  );
}
