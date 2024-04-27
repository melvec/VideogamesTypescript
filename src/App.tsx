import "./App.css";

import { Show, Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

import { Cards } from "./components/Cards/Cards";
import { Genres } from "./components/Genres";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
                "aside main"`,
        }}

        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
        gridTemplateRows={"50px 1fr 30px"}
        h="200px"
        gap="1"
        fontWeight="bold"

      >
        <GridItem pl="2" area={"nav"}>
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem pl="2" padding={4}  area={"aside"}>
            <Genres />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <Cards />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
