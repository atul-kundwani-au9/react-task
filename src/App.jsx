import { Box } from "@chakra-ui/react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
    {/* background image set */}
      <Box
        backgroundImage="url('./bg.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"100% 100%"}
        height={"100vh"}
        width={"100vw"}
        position={"relative"}
      >
        {/* Card component */}
        <Card/>
      </Box>
    </>
  );
}

export default App;
