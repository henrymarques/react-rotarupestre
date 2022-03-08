import { WaveTopDown } from "../../components/WaveTopDown";

import { Header } from "../../components/Header";

import { Content, Footer } from "./styles";

export default function Index() {
  return (
    <>
      <Header />
      <Content>
        <WaveTopDown />
      </Content>
      <Footer />
    </>
  );
}
