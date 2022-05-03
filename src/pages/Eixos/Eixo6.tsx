import ImageSlider from "../../components/ImageSlider/Index";

import { Content } from "./eixos.styles";

import imagem1 from "../../assets/eixos/alimenticio/a.jpg";
import imagem2 from "../../assets/eixos/arqueologico/42225.jpg";

export default function Eixo() {
  const images = [
    "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  ];

  const images2 = [imagem1, imagem2];

  return (
    <Content>
      <div>
        <h2>Eixo 6</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          quas provident dolore placeat quia, officiis maiores illo
          reprehenderit nisi tenetur ipsum inventore odit, voluptate deserunt
          sunt veniam error autem rem.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          quas provident dolore placeat quia, officiis maiores illo
          reprehenderit nisi tenetur ipsum inventore odit, voluptate deserunt
          sunt veniam error autem rem.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          quas provident dolore placeat quia, officiis maiores illo
          reprehenderit nisi tenetur ipsum inventore odit, voluptate deserunt
          sunt veniam error autem rem.
        </p>

        <h2>Galeria</h2>
        <ImageSlider images={images2} />
      </div>
    </Content>
  );
}
