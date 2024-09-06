<script>
  export let data
</script>

<header>
    <img src="./static/newlogo.svg">
    <a href="#">TEAM27</a>
</header>

<main>
    <!-- top of the page -->
    <h1>WELCOME TO THIS SQUADPAGE, HERE YOU CAN FIND THE TWO CLASSES FROM YEAR 2 FDND</h1>
    <button>SCROLL</button>

    <!-- second half of the page [name list] -->
    <ul>
        {#each data.persons as person}
            {#if person.name.length > 0}
            <li>
                {person.name} {person.prefix} {person.surname}
            </li>
            {/if}
        {/each}
    </ul>
</main>


<style>
    li{
        list-style-type: none;
    }
    
    h1{
        font-size: 42px;
        text-align: center ;
        color: rgba(255, 255, 255, 0.6);
    }
</style>
