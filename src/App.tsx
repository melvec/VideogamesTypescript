import { useState } from "react";
import "./App.css";

import { Show, Grid, GridItem } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

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
 
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>

<Show above="lg">
  <GridItem pl='2' bg='orange.300' area={'aside'}>
    Aside
  </GridItem>

</Show>

  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  
</Grid>




    </>
  );
}

export default App;
