import "./App.css";
import { Flex, Show, Grid, GridItem, Box } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Cards } from "./components/Cards";
import { Genres } from "./components/Genres";
import { useState } from "react";
import { Platforms } from "./components/Platforms";
import { SortSelector } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { Title } from "./components/Title";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortBy: string;
  searchText: string;
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem pl="2" padding={4} area={"aside"} paddingTop="30px">
            <Genres
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem pl="2" area={"main"}>
          <Box paddingTop="30px">
            <Title gameQuery={gameQuery} />
          </Box>
          <Flex justify="flex-start" align="center" mb={4} paddingTop="30px">
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
