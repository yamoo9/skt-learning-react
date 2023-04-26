import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

export function useFetch(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const { data } = await axios.get(endpoint);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return useMemo(
    () => ({ isLoading, data, error }), 
    [isLoading, data, error]
  );
}
