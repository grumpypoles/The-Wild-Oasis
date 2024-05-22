import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello Wild Oasis</Heading>
            <div>
              <Heading as="h3">Check in and Out</Heading>
              <Button onClick={() => alert("You clicked in")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("You clicked out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h2">Form</Heading>
            <form>
              <Input type="number" placeholder="numbers only" />
              <Input type="number" placeholder="numbers only" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
