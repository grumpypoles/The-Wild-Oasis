import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";





const StyledApp = styled.div`
background-color: orangered;
padding: 20px;
`
function App() {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <Heading as='h1'>Hello Wild Oasis</Heading>
      <Heading as='h3'>Check in and Out</Heading>
      <Button onClick={() => alert("You clicked me")}>Click Me</Button>
      <Button onClick={() => alert("You clicked me")}>Check Out</Button>
      <Heading as='h2'>Form</Heading>
      <Input type='number' placeholder='numbers only' />
      <Input type='number' placeholder='numbers only' />
    </StyledApp>
    </>
  );
}

export default App;
