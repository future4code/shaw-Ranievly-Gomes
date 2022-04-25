import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #8a2be2,
    #00e1fd,
    #ff6347,
    blueviolet,
    #fc007a
  );
  background-size: 300% 300%;
  animation: effect 15s ease infinite;

  @keyframes effect {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Botao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 29%;
  height: 10%;
  background: linear-gradient(45deg, #8a2be2, #00e1fd, blueviolet, #fc007a);
  margin: 0 auto;

  h1 {
    background: linear-gradient(45deg, #8a2be2, #00e1fd, blueviolet, #fc007a);
    width: 300px;
    height: 1.6em;
    text-align: center;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }

  span {
    color: #00e1fd;
  }

  button {
    margin-right: 1.1em;
  }
`;
