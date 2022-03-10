import { Wave } from "../../components/Wave";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { Header, Content, Main } from "./styles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header>
        <h1>Bem-vindos</h1>
        <span>A história que ultrapassa gerações agora bem perto de você!</span>
      </Header>
      <Content>
        <Wave />
        <Main>
          <span>Insert content here</span>
        </Main>
        <Wave className="inverted" />
      </Content>
      <Footer />
    </>
  );
}
