<script>
  export let data

  function checkGithubHandle (github) {
    if (github.includes('https')) {
      return true
    } 

    return false
  }
</script>

<main>
  <h2>{data.squad.name}</h2>

  <ul>
    {#each data.persons as person}
      {#if person.name.length > 0}
        <li>
          {person.name} {person.prefix} {person.surname}
          <div class="contact-link">
            {#if person.github_handle.length > 0 && checkGithubHandle (person.github_handle)}
              <a href="{person.github_handle}">get in contact with {person.name}, Github</a>
            {:else if person.github_handle.length > 0 || checkGithubHandle (person.github_handle)}
              <a href="https://github.com/{person.github_handle}">get in contact with {person.name}, Github</a>  
            {/if}  
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</main>

<style>
  main{
    margin: 0 auto;
    min-width: 250px;
    width: 28vw;
  }

  h2{
    margin: 1rem;
    font-size: 2rem;
    text-align: center;
  }

  ul {
    list-style: none;
  }
</style>