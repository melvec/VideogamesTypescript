import "./App.css";

import { Flex, Show, Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

import { Cards } from "./components/Cards";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { Platforms } from "./components/Platforms";
import { SortSelector } from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const handleGenreSelect = (genreName: string) => {
    setSelectedGenre(genreName);
  };
  const handlePlatformSelect = (platformName: string) => {
    setSelectedPlatform(platformName);
  };
  const handleSortBy = (platformName: string) => {
    setSelectedPlatform(platformName);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
                "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
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
          <GridItem pl="2" padding={4} area={"aside"}>
            <Genres
              selectedGenre={selectedGenre}
              onSelectGenre={handleGenreSelect}
            />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <Flex justify="flex-start" align="center" mb={4}>
            <Platforms
              selectedPlatform={selectedPlatform}
              onSelectPlatform={handlePlatformSelect}
            />
            <Flex pl={4}>
              <SortSelector />
            </Flex>
          </Flex>
          <Cards
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
