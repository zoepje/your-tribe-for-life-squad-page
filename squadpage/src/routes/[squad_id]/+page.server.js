import fetchJson from "$lib/fetch-json"

export async function load({params}) {

  const url = `https://fdnd.directus.app/items/person/?filter={"squad_id":${params.squad_id}}`
  const squadurl = `https://fdnd.directus.app/items/squad/${params.squad_id}`

  const persons = await fetchJson(url)
  const squad = await fetchJson(squadurl)

  return {
    persons: persons.data,
    squad: squad.data
  }
}