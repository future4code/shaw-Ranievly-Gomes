import styled from "styled-components";

export const InicialStyle = styled.div`
  background: linear-gradient(45deg, #8a2be2, #00e1fd, blueviolet, #fc007a);
  max-width: 29%;
  height: 90%;
  margin: 0 auto;
`;

export const InicialStylePaiDeTodos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InicialStyleImg = styled.div`
  margin-top: 1em;

  img {
    margin: 0 auto;
    height: 400px;
    width: 500px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 2px 10px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const InicialStyleTexto = styled.div`
  padding: 10px;
  flex-direction: column;
  width: 475px;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 2px 10px 5px 5px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1.3em;
  }
`;
