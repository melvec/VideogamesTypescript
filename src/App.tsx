import "./App.css";
import { Flex, Show, Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Cards } from "./components/Cards";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { Platforms } from "./components/Platforms";
import { SortSelector } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortBy: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <Flex justify="flex-start" align="center" mb={4}>
            <Platforms
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <Flex pl={4}>
              <SortSelector
                sortOrder={gameQuery.sortBy}
                onSelectSortBy={(sortBy) =>
                  setGameQuery({ ...gameQuery, sortBy })
                }
              />
            </Flex>
          </Flex>
          <Cards gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
