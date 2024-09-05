<script>
  export let data
</script>

<h1><a href="/">Team<span>.27</span></a></h1>

<figure>
  <figcaption>Classes</figcaption>
  <ul>
    {#each data.squads as squad}
      <li>
        <a href="/{squad.id}" class="nav-link">{squad.name}</a>
      </li>
    {/each}
  </ul>
</figure>

<slot></slot>

<style>
  h1 {
    font-family: Griffiths;
    font-size: 4rem;
    text-align: center;
    font-weight: 300;

    & span {
      font-family: Poppins;
      font-weight: bold;
      font-size: 3rem;
    }
  }

  figure{
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & figcaption {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;

    & li {
      margin: 5px;
    }
  }

  a{
    text-decoration: none;
  }

  a.nav-link:hover{
    text-decoration: underline wavy;
    color: yellow;
  }
</style>