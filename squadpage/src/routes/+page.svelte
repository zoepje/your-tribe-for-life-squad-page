<script>
  export let data

  let intro = "Welcome to this squadpage, here you can find the two squads from Year 2 of FDND";

  let current = 1;
  
</script>

<main>
  <section id="intro">
    <input type="checkbox" id="toggleMode">
    <label for="toggleMode" class="toggleDark"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 22.5C6.75 21.9033 6.51295 21.331 6.09099 20.909C5.66903 20.4871 5.09674 20.25 4.5 20.25H2.25C1.65326 20.25 1.08097 20.4871 0.65901 20.909C0.237053 21.331 0 21.9033 0 22.5C0 23.0967 0.237053 23.669 0.65901 24.091C1.08097 24.5129 1.65326 24.75 2.25 24.75H4.5C5.09674 24.75 5.66903 24.5129 6.09099 24.091C6.51295 23.669 6.75 23.0967 6.75 22.5ZM8.19 33.75L6.5925 35.3475C6.17344 35.7691 5.93822 36.3393 5.93822 36.9338C5.93822 37.5282 6.17344 38.0984 6.5925 38.52C7.01407 38.9391 7.58433 39.1743 8.17875 39.1743C8.77317 39.1743 9.34344 38.9391 9.765 38.52L11.3625 36.9225C11.7311 36.4921 11.9237 35.9384 11.9019 35.3721C11.88 34.8059 11.6452 34.2687 11.2445 33.868C10.8438 33.4673 10.3066 33.2325 9.74037 33.2106C9.1741 33.1888 8.62043 33.3814 8.19 33.75ZM22.5 6.75C23.0967 6.75 23.669 6.51295 24.091 6.09099C24.5129 5.66903 24.75 5.09674 24.75 4.5V2.25C24.75 1.65326 24.5129 1.08097 24.091 0.65901C23.669 0.237053 23.0967 0 22.5 0C21.9033 0 21.331 0.237053 20.909 0.65901C20.4871 1.08097 20.25 1.65326 20.25 2.25V4.5C20.25 5.09674 20.4871 5.66903 20.909 6.09099C21.331 6.51295 21.9033 6.75 22.5 6.75ZM35.235 12.015C35.8253 12.0125 36.3909 11.7782 36.81 11.3625L38.4075 9.765C38.643 9.56329 38.8343 9.31508 38.9694 9.03593C39.1044 8.75679 39.1803 8.45274 39.1923 8.14287C39.2043 7.833 39.1521 7.52401 39.0389 7.23527C38.9258 6.94654 38.7542 6.68431 38.535 6.46504C38.3157 6.24576 38.0535 6.07418 37.7647 5.96107C37.476 5.84795 37.167 5.79573 36.8571 5.8077C36.5473 5.81967 36.2432 5.89557 35.9641 6.03062C35.6849 6.16567 35.4367 6.35697 35.235 6.5925L33.75 8.19C33.3309 8.61157 33.0957 9.18183 33.0957 9.77625C33.0957 10.3707 33.3309 10.9409 33.75 11.3625C34.1467 11.7571 34.6761 11.9897 35.235 12.015ZM8.235 11.3625C8.65409 11.7782 9.21974 12.0125 9.81 12.015C10.1061 12.0167 10.3997 11.96 10.6738 11.848C10.9479 11.736 11.1973 11.571 11.4075 11.3625C11.8266 10.9409 12.0618 10.3707 12.0618 9.77625C12.0618 9.18183 11.8266 8.61157 11.4075 8.19L9.81 6.5925C9.60169 6.38124 9.35381 6.21307 9.08051 6.0976C8.80721 5.98214 8.51384 5.92163 8.21716 5.91954C7.92048 5.91745 7.62629 5.97382 7.35139 6.08543C7.07649 6.19703 6.82626 6.36169 6.615 6.57C6.40374 6.77831 6.23557 7.02619 6.1201 7.29949C6.00464 7.57279 5.94413 7.86616 5.94204 8.16284C5.93782 8.76202 6.1718 9.33833 6.5925 9.765L8.235 11.3625ZM42.75 20.25H40.5C39.9033 20.25 39.331 20.4871 38.909 20.909C38.4871 21.331 38.25 21.9033 38.25 22.5C38.25 23.0967 38.4871 23.669 38.909 24.091C39.331 24.5129 39.9033 24.75 40.5 24.75H42.75C43.3467 24.75 43.919 24.5129 44.341 24.091C44.7629 23.669 45 23.0967 45 22.5C45 21.9033 44.7629 21.331 44.341 20.909C43.919 20.4871 43.3467 20.25 42.75 20.25ZM36.81 33.75C36.3825 33.5122 35.8892 33.4202 35.4048 33.488C34.9203 33.5557 34.4712 33.7794 34.1253 34.1253C33.7794 34.4712 33.5557 34.9203 33.488 35.4048C33.4202 35.8892 33.5122 36.3825 33.75 36.81L35.3475 38.4075C35.7691 38.8266 36.3393 39.0618 36.9338 39.0618C37.5282 39.0618 38.0984 38.8266 38.52 38.4075C38.9391 37.9859 39.1743 37.4157 39.1743 36.8213C39.1743 36.2268 38.9391 35.6566 38.52 35.235L36.81 33.75ZM22.5 10.125C20.0525 10.125 17.6599 10.8508 15.6248 12.2106C13.5898 13.5703 12.0036 15.5031 11.067 17.7643C10.1304 20.0255 9.88529 22.5137 10.3628 24.9142C10.8403 27.3148 12.0189 29.5198 13.7496 31.2504C15.4802 32.9811 17.6852 34.1597 20.0858 34.6372C22.4863 35.1147 24.9745 34.8696 27.2357 33.933C29.4969 32.9964 31.4297 31.4102 32.7894 29.3752C34.1492 27.3401 34.875 24.9475 34.875 22.5C34.8691 19.2198 33.5634 16.0756 31.2439 13.7561C28.9244 11.4366 25.7802 10.1309 22.5 10.125ZM22.5 30.375C20.9425 30.375 19.4199 29.9131 18.1249 29.0478C16.8298 28.1825 15.8205 26.9526 15.2244 25.5136C14.6284 24.0747 14.4725 22.4913 14.7763 20.9637C15.0802 19.4361 15.8302 18.0329 16.9315 16.9315C18.0329 15.8302 19.4361 15.0802 20.9637 14.7763C22.4913 14.4725 24.0747 14.6284 25.5136 15.2244C26.9526 15.8205 28.1825 16.8298 29.0478 18.1249C29.9131 19.4199 30.375 20.9425 30.375 22.5C30.375 24.5886 29.5453 26.5916 28.0685 28.0685C26.5916 29.5453 24.5886 30.375 22.5 30.375ZM22.5 38.25C21.9033 38.25 21.331 38.4871 20.909 38.909C20.4871 39.331 20.25 39.9033 20.25 40.5V42.75C20.25 43.3467 20.4871 43.919 20.909 44.341C21.331 44.7629 21.9033 45 22.5 45C23.0967 45 23.669 44.7629 24.091 44.341C24.5129 43.919 24.75 43.3467 24.75 42.75V40.5C24.75 39.9033 24.5129 39.331 24.091 38.909C23.669 38.4871 23.0967 38.25 22.5 38.25Z" 
      fill="var(--primary)"/></svg>
      </label>
    <label for="toggleMode" class="toggleLight"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6239 0.962421C19.1013 0.207716 18.1869 -0.155151 17.3015 0.062511C7.11222 2.57354 0 11.6743 0 22.1974C0 34.7672 10.2328 45 22.8026 45C33.3257 45 42.4264 37.8878 44.9375 27.6984C45.1552 26.8131 44.7923 25.8986 44.0376 25.3761C43.2973 24.8681 42.2958 24.8827 41.5555 25.4052C38.8703 27.3066 35.7206 28.3226 32.4403 28.3226C23.746 28.3226 16.6773 21.254 16.6773 12.5596C16.6774 9.27939 17.6934 6.12965 19.5948 3.44447C20.1173 2.70421 20.1319 1.70268 19.6239 0.962421Z" 
      fill="var(--quaternary)"/></svg>
       </label>
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
    <div class="filters">
      <label for="1d">
        <input type="radio" 
                name="squad" 
                id="1d" 
                on:click={() => current = 1}
                checked>
        <p>1d</p>        
      </label>
      <label for="1e">
        <input type="radio" 
                name="squad" 
                id="1e" 
                on:click={() => current = 2}>
        <p>1e</p>        
      </label>
      <label for="1f">
        <input type="radio" 
                name="squad" 
                id="1f" 
                on:click={() => current = 3}>
        <p>1f</p>        
      </label>
    </div>

    <ul class:show={current === 1} class:hide={current != 1}>
      {#each data.persons as person}
        {#if person.squad_id === 3}
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
        {/if}
      {/each}
    </ul>

    <ul class:show={current === 2} class:hide={current != 2}>
      {#each data.persons as person}
        {#if person.squad_id === 4}
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
        {/if}
      {/each}
    </ul>

    <ul class:show={current === 3} class:hide={current != 3}>
      {#each data.persons as person}
        {#if person.squad_id === 5}
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
        {/if}
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    position: relative;
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
    background-color: var(--primary);
  }

  div {
    position: absolute;
    font-size: 32em;
    color: var(--secondary);
    z-index: 1;
  }

  .sectionNumber {
    top: 30px;
    left: 50px;
    font-size: 4em;
    pointer-events: none;
    z-index: 1;
  }

  .sn-t {
    top: -20px;
  }

  h1 {
    font-family: Griffiths;
    font-size: 5em;
    margin: 0;
    z-index: 2;
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
    z-index: 2;
  }

  .scrollButton {
    position: absolute;
    text-transform: uppercase;
    font-size: 1em;
    bottom: 2em;
    animation: wiggleButton infinite 2s;
  }

  /* darkmode */
  #toggleMode {
    display: none;
  }

  .toggleDark, .toggleLight {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 25px;
    z-index: 100;
  }

  .toggleDark {
    display: none;
  }

  svg {
    width: 1.8em;
    height: 1.8em;
  }

  #toggleMode:checked ~ .toggleLight {
    display: none;
  }

  #toggleMode:checked ~ .toggleDark {
    display: block;
  }

  #toggleMode:checked ~ section {
    --quaternary: #FFFCF2;

    --tertiary: #403D39;
    --secondary: #CCC5B9;
    --primary: #252422;
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

  .filters {
    top: 10px;
    right: 10px;
    display: flex;
  }

  .filters label {
    display: flex;
    height: 50px;
    margin: 3rem;
    transition: 0.1s ease;
  }

  .filters label:hover {
    cursor: pointer;
    scale: 1.1;
  }

  .filters p {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: PoppinsBold;
    color: var(--secondary);
  }

  .filters input {
    visibility: hidden;
  }

  .filters input:checked ~ p {
    color: var(--quaternary);
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  ul {
    margin: 10em;
    list-style: none;
    width: 500px;
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

    .sn-t {
      top: -20px;
    }
  }
</style>
