import { CanceledError } from 'axios';
import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Platform } from './usePlatforms';




export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
  }
  
  interface FetchDataResponse <T>{
    count: number;
    results: T[];
  }

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();

        apiClient.get<FetchDataResponse<T>>(endpoint, {signal: controller.signal })
            .then(res => {
                setData(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false);
                
            });
    },[])
    return {data, error,isLoading}
}

export default useData