
import useGenres, { Genre } from "../hooks/useGenres";

export const Genres = () => {

    const {data} = useGenres();

  return (
    <>
   
    {data.map((genre)=> <h1>{genre.name}</h1>)}
    </>
  )
}
