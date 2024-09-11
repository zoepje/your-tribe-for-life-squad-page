<script>
  export let data

  function checkAvatarImage (avatar) {
    if (avatar.includes('https')) {
      return true
    } 

    return false
  }

  let intro = "Welcome to this squadpage, here you can find the two squads from Year 2 of FDND";
</script>

<main>
  <section id="intro">
    <div aria-hidden="true" class="sectionNumber">1</div>
    <div>27</div>
    <section>
      <h1>Team<span class="titleNumber">.27</span></h1>
      <p>{intro.toUpperCase()}</p>
      <a href="#names" class="scrollButton">Scroll</a>
    </section>
  </section>
  
  <section id="names">
    <div aria-hidden="true" class="sectionNumber">2</div>
    <ul>
      {#each data.persons as person}
        <li>
          <a href="/{person.id}">
            {person.name.toUpperCase()} <span class="personSurname">
              {#if person.prefix === null}
              {person.surname}
              {:else}
              {person.prefix} {person.surname}
              {/if} </span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    background: var(--primary);
  }
  
  section {
    width: 100%;
    min-height: 100vh;
    position: relative;

    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
  }

  div {
    position: absolute;
    font-size: 32em;
    color: var(--secondary);
  }

  .sectionNumber {
    top: 30px;
    left: 50px;
    font-size: 4em;
    pointer-events: none;
  }

  h1 {
    font-family: Griffiths;
    font-size: 5em;
    margin: 0;
  }

  .titleNumber {
    display: inline;
    background: transparent;
    margin-left: 10px;
  }

  p {
    font-family: PoppinsThin;
    text-align: center;
    max-width: 36ch;
  }

  .scrollButton {
    position: absolute;
    text-transform: uppercase;
    font-size: 1em;
    bottom: 2em;
    animation: wiggleButton infinite 2s;
  }

  @keyframes wiggleButton {
    0% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-1em);
    }
    100% {
      transform: translateY(0);
    }
  }

  ul {
    list-style: none;
  }

  ul:hover a,
  ul:hover span {
    color: var(--secondary);
  }

  a {
    font-size: 2em;
    text-decoration: none;
  }

  ul a:hover,
  ul a:hover span {
    color: var(--quaternary);
  }

  .personSurname {
    font-family: Griffiths;
  }

  /* Media Query for Mobile Users */
  @media (max-width: 600px) {
    .sectionNumber {
      top: 0px;
      left: 20px;
    }
  }
</style>
