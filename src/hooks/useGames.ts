import useData from './useData';
import  { Genre } from './useGenres'
import { Platform } from './usePlatforms';



export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    genres: Genre[];
  }
  
 

const useGames = () => useData<Game>('/games')
    


export default useGames