<<<<<<< Updated upstream
export let csr = false
=======
/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		global: await directus.request(readItems('global')),
	};
}

// src/routes/+page.js
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const apiUrl = 'https://fdnd.directus.app/items/person';
    
    // API-aanroep om de gegevens op te halen
    const response = await fetch(apiUrl);
    
    // Verwerk de JSON-data
    const data = await response.json();
  
    // Controleer of de API-data correct is binnengekomen
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    // Stuur de data terug naar de Svelte-pagina
    return {
      people: data.data // Het data object bevat een 'data' array
    };
  }
  
>>>>>>> Stashed changes
