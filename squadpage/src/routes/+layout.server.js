import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/squad/?filter={"cohort":"2324"}'

  const squads = await fetchJson(url)

  return {
    squads: squads.data
  }
}