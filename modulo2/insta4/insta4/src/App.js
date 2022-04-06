import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Rani'}
          fotoUsuario={'https://i.pinimg.com/736x/6f/1e/fb/6f1efb3e2f7ddb6f6b9a3dbefabe0c67.jpg'}
          fotoPost={'https://ichef.bbci.co.uk/news/640/cpsprodpb/35F4/production/_116221831_mediaitem116221830.jpg'}
        />
         <Post
          nomeUsuario={'Cristina'}
          fotoUsuario={'https://logosmarcas.net/wp-content/uploads/2021/08/Among-Us-Logo.png'}
          fotoPost={'https://www.oficinadanet.com.br/imagens/post/36789/among-us-capa-1.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
