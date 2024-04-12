
import "./App.css";

import { Show, Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";


import { Cards } from "./components/Cards/Cards";

const apiKey = '413179f7b37044a3b53b63db111fda8c'; 
const apiURL = 'https://api.rawg.io/api/games';



function App() {

 
  return (
    <>
     <Grid
templateAreas={{base: `"nav" "main"`,
                lg: `"nav nav"
                "aside main"`}}
  gridTemplateRows={'50px 1fr 30px'}

  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
 
  <GridItem pl='2' area={'nav'}>
    <NavBar /> 
  </GridItem>

<Show above="lg">
  <GridItem pl='2'  area={'aside'}>
    Aside
  </GridItem>

</Show>

  <GridItem pl='2'  area={'main'}>
    <Cards />
  </GridItem>
  
</Grid>




    </>
  );
}

export default App;
