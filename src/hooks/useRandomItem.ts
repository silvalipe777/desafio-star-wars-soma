import { useState, useCallback } from 'react';
import { Category, getRandomItem } from '../services/swapi.ts';

export function useRandomItem<T>(category: Category) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchRandom = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getRandomItem(category);
      if (result.detail === "Not found") {
        throw new Error('Item not found');
      }
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch'));
    } finally {
      setLoading(false);
    }
  }, [category]);

  return { data, loading, error, fetchRandom };
}
