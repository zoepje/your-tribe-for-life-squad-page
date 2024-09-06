<<<<<<< Updated upstream
<script>
  export let data

  function checkAvatarImage (avatar) {
    if (avatar.includes('https')) {
      return true
    } 

    return false
  }
</script>

<main>
<body>

  <h1>welcome to this squadpage, here you can find the two squads from year 2 of FDND</h1>

  <ul>
    {#each data.persons as person}

      <li>
       

        <p>{person.name}</p>
        <p>{person.surname}</p>
        
      </li>

    {/each}
  </ul>

</body>
</main>

<style>

  body{
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #252422;
  }

  ul {
    list-style: none;
    padding:0;
    display:flex;
    flex-direction: column;
    gap: 5px;
    align-items:start;
  }
  p{
    color:white;
  }
  

</style>
=======
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data as person }
    <div>
        <h1>{person.name}</h1>
        <p>{person.id}</p>
    </div>
{/each}

<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>



	




>>>>>>> Stashed changes
