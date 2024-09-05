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
    <h1>Team<span>.27</span></h1>
    <p>Welcome to this squadpage, here you can find the two squads from Year 2 of FDND</p>
  
    <ul>
      {#each data.persons as person}
        <li>
          <a href="/{person.id}">
            <span class="avatar">
              {#if person.avatar.length > 0 && checkAvatarImage (person.avatar)}
                <img src="{person.avatar}" alt="Avatar van {person.name}">
              {:else if person.avatar.length > 0 || checkAvatarImage (person.avatar)}
                {person.avatar}
              {:else}
                <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Avatar van {person.name}">
              {/if}
            </span>
  
            {person.name} {person.prefix} {person.surname}
          </a>
        </li>
      {/each}
    </ul>
  </main>
  
  <style>
    ul {
      list-style: none;
      padding:0;
      display:flex;
      flex-wrap: wrap;
      gap:.5rem;
      align-items:start;
    }

    a {
      display:flex;
      flex-direction: column;
      align-items: center;
      gap:.5rem;
      margin-bottom: 1rem;
      border-radius: .25rem;
      border:1px solid var(--primary);
      overflow:hidden;
      padding:0 0 .25rem;
      text-decoration:none;
    }

    span {
      display:flex;
      justify-content:center;
      align-items:center;
      width:5rem;
      aspect-ratio: 1 / 1;
      font-size: 3rem;
    }

    img {
      max-width:100%;
      aspect-ratio: 1/1;
      object-fit: contain;
    }
  </style>