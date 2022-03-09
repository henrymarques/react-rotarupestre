// import { WaveTopDown } from "../../components/WaveTopDown";

import { Navbar } from "../../components/Navbar";

import { Content, Footer } from "./styles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Bem-vindos</h1>
        <span>A história que ultrapassa gerações agora bem perto de você!</span>
      </Content>
      <Footer />
    </>
  );
}
