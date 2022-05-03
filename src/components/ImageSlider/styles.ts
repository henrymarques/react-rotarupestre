import styled from "styled-components";

export const Slider = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .arrows {
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }

  .arrows.left {
    margin: 0 0.5rem 0 0;
  }

  .arrows.right {
    margin: 0 0 0 0.5rem;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
  }

  img {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }

    .arrows.left {
      margin: 0 0 0.5rem 0;
    }

    .arrows.right {
      margin: 0.5rem 0 0 0;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
