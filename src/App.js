import {Left} from './Components/Left'
import {Right} from './Components/Right'
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
      display:flex;
      width:100%;
      height:100vh;
      position: relative;
      /* background: rgba(0,0,0,0.3); */
      z-index: 1;


`
function App() {
  return (
    <Container>
      
      <Left/>
      <Right/>
    </Container>
  );
}

export default App;
