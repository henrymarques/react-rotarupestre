import { useState } from "react";

import { Wave } from "../../components/Wave";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Eixos as EixosSVG, EixoTipos } from "../../components/Eixos";

import EixoAlimenticio from "./EixoAlimenticio";
import EixoArqueologico from "./EixoArqueologico";
import EixoCeramico from "./EixoCeramico";
import EixoEconomico from "./EixoEconomico";
import EixoFarmaceutico from "./EixoFarmaceutico";
import Eixo6 from "./Eixo6";

import { Header, Content, Main } from "./index.styles";

import pilar from "../../assets/pilar.png";
import seta from "../../assets/seta.png";

export default function Eixos() {
  const [eixoVisivel, setEixoVisivel] = useState<EixoTipos>("alimenticio");

  function handlePathClick(name: EixoTipos) {
    setEixoVisivel(name);
  }

  return (
    <>
      <Navbar />
      <Header>
        <div className="left">
          <EixosSVG className="pizzaEixos" handlePathClick={handlePathClick} />
        </div>
        <div className="right">
          <img className="logo" src={pilar} alt="Logo" />

          <h1>Eixos</h1>
          <span>Use o diagrama para selecionar o eixo que deseja conhecer</span>

          <img className="seta" src={seta} alt="Seta" />
        </div>
      </Header>
      <Content>
        <Wave className="wave" />
        <Main>
          {eixoVisivel === "alimenticio" && <EixoAlimenticio />}
          {eixoVisivel === "arqueologico" && <EixoArqueologico />}
          {eixoVisivel === "ceramico" && <EixoCeramico />}
          {eixoVisivel === "farmaceutico" && <EixoEconomico />}
          {eixoVisivel === "economico" && <EixoFarmaceutico />}
          {eixoVisivel === "eixo6" && <Eixo6 />}
        </Main>
        <Wave className="wave inverted" />
      </Content>
      <Footer />
    </>
  );
}
