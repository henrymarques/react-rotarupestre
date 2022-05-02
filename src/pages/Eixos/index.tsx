import { useState } from "react";

import { Wave } from "../../components/Wave";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Eixos as EixosSVG, eixoTipos } from "../../components/Eixos";

import { EixoAlimentos } from "./EixoAlimentos";

import { Header, Content, Main } from "./index.styles";

import pilar from "../../assets/pilar.png";
import seta from "../../assets/seta.png";

export default function Eixos() {
  const [eixoVisivel, setEixoVisivel] = useState<eixoTipos>("alimentos");

  function handlePathClick(name: eixoTipos) {
    setEixoVisivel(name);
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
          <span>Use o diagrama para selecionar o eixo que deseja conhecer</span>

          <img className="seta" src={seta} alt="Seta" />
        </div>
      </Header>
      <Content>
        <Wave />
        <Main>
          {eixoVisivel === "alimentos" && <EixoAlimentos />}
          {eixoVisivel === "arqueologico" && <span>Eixo arqueologico</span>}
          {eixoVisivel === "ceramico" && <span>Eixo ceramico</span>}
        </Main>
        <Wave className="inverted" />
      </Content>
      <Footer />
    </>
  );
}
