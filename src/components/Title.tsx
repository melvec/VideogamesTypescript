import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

export const Title = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""}   
  ${gameQuery.genre?.name || ""} 
   `;
  return <Heading>{heading}</Heading>;
};
