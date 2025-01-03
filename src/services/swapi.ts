const BASE_URL = 'https://swapi.py4e.com/api';

export type Category = 'people' | 'planets' | 'starships' | 'vehicles' | 'species' | 'films';

export async function getRandomItem(category: Category) {
  try {
    const countResponse = await fetch(`${BASE_URL}/${category}`);
    const { count } = await countResponse.json();

    const randomId = Math.floor(Math.random() * count) + 1;

    const itemResponse = await fetch(`${BASE_URL}/${category}/${randomId}`);
    const data = await itemResponse.json();

    return data;
  } catch (error) {
    console.error(`Error fetching random ${category}:`, error);
    throw error;
  }
}