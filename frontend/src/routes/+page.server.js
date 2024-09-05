import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'

  const person = await fetchJson(url)

  return {
    person: person.data
  }
}