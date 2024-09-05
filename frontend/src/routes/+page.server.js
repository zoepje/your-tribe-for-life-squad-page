import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":${params.squad_id}}'

  const person = await fetchJson(url)

  return {
    person: person.data
  }
}