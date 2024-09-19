<!-- > _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md) -->

# Squadpage Team 27
Op deze squadpage kun je in contact komen met je mede leerlingen uit jouw squad en andere squads.

## Inhoudsopgave
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
**📸 Team 27 squadpage**
<img width="1335" alt="Screenshot 2024-09-19 at 5 43 00 PM" src="https://github.com/user-attachments/assets/7f020391-2d95-46d3-ac99-7e78b745e16a">
<img width="1335" alt="Screenshot 2024-09-19 at 5 43 09 PM" src="https://github.com/user-attachments/assets/5ab1c617-62d2-4c82-9eec-4c4623bb02d7">

🌐 [Squadpage](your-tribe-for-life-squad-page-sandy.vercel.app)


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Wij hebben deze squadpage gebouwd met HTML, CSS, JavaScript en SvelteKit. Voor de data maken we gebruik van een Directus, waaruit we informatie over de studenten ophalen.
Wij hebben een global CSS bestand in `static/css` waarin we de fonts en custom properties in hebben staan. In de map `src/routes` bevinden zich twee bestanden: `+page.server.js` en `+page.svelte`. In `+page.server.js` wordt de data opgehaald uit de Directus, terwijl `+page.svelte` alle HTML, JavaScript en CSS bevat die nodig zijn om de website weer te geven.

## Installatie
1. Open een terminalvenster en ga naar de juiste map door het volgende commando te gebruiken: `cd squadpage`
1. Installeer alle benodigde bestanden met het comando:`npm install` 
1. Als dit gelukt is kun je op localhost runnen met `npm run dev`

## Gebruik
Je kunt per squad filteren door op de squad naam te klikken. En als je contact wilt opnemen met iemand kun je dat doen via de link die te voorschijn komt als je over hun naam hovert/klikt.

## Bronnen
- [SvelteKit](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [Change styling on click](https://stackoverflow.com/questions/64128016/svelte-change-the-style-of-a-nav-item-when-clicked)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
