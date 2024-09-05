p<script>
  export let data
</script>
  
  <main>
    <h1>Team <span>27</span></h1>
    <p>Welcome to this squadpage, here you can find the two squads from year 2 of FDND</p>
    
    <ul>
      {#each data.person as person}
        <li><p>{person.name}</p></li>
      {/each}
    </ul>

  
  </main>

  <style lang="scss">

    main {    display: flex; flex-direction: column;
              align-items: center; justify-content: end; 
              height: 100vh; width: 100vw;
              overflow: hidden; }

    h1 {      text-transform: uppercase;
              font-size: 4em; font-weight: 700;
              text-align: center; }

    span {    color: palevioletred; font-weight: 400; }

    p {       text-align: center; max-width: 17em; }

   
  </style>
  
