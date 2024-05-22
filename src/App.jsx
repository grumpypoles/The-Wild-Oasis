import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;



const StyledApp = styled.div`
background-color: orangered;
padding: 20px;
`
function App() {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <H1>Hello Wild Oasis</H1>
      <Button onClick={() => alert("You clicked me")}>Click Me</Button>
      <Button onClick={() => alert("You clicked me")}>Check Out</Button>
      <Input type='number' placeholder='numbers only' />
      <Input type='number' placeholder='numbers only' />
    </StyledApp>
    </>
  );
}

export default App;
