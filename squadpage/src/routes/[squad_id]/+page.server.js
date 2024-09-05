import fetchJson from "$lib/fetch-json"

export async function load({params}) {
  console.log('PARAMS', params)
  const url = `https://fdnd.directus.app/items/person/?filter={"squad_id":${params.squad_id}}`

  const persons = await fetchJson(url)

  return {
    persons: persons.data
  }
}