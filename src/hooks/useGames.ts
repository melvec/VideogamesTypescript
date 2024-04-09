import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client';


interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState('')
    
    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setErrors(err.message));
    }, [])
    return {games, error}
}

export default useGames